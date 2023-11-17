// SPDX-License-Identifier: MIT
pragma solidity ^0.8.9;

import "@openzeppelin/contracts-upgradeable/token/ERC20/ERC20Upgradeable.sol";
import "@openzeppelin/contracts-upgradeable/token/ERC20/extensions/ERC20PausableUpgradeable.sol";
import "@openzeppelin/contracts-upgradeable/access/AccessControlUpgradeable.sol";
import "@openzeppelin/contracts-upgradeable/token/ERC20/extensions/draft-ERC20PermitUpgradeable.sol";
import "@openzeppelin/contracts-upgradeable/proxy/utils/Initializable.sol";
import "@openzeppelin/contracts-upgradeable/proxy/utils/UUPSUpgradeable.sol";

contract HiroToken is Initializable, ERC20Upgradeable, PausableUpgradeable, AccessControlUpgradeable, ERC20PermitUpgradeable, UUPSUpgradeable {
    bytes32 public constant PAUSER_ROLE = keccak256("PAUSER_ROLE");
    bytes32 public constant UPGRADER_ROLE = keccak256("UPGRADER_ROLE");
    
    struct Locker {
        uint256 unlockTime;
    }

    mapping(address => Locker) public lockers;

    /// @custom:oz-upgrades-unsafe-allow constructor
    constructor() {
        _disableInitializers();
    }

    modifier onlyAfterUnlockTime(address _wallet) {
        Locker storage locker = lockers[_wallet];
        require(locker.unlockTime == 0 || block.timestamp >= locker.unlockTime, "Wallet is locked until the unlock time");
        _;
    }

    function lock(address _wallet, uint256 _unlockTime) external onlyRole(PAUSER_ROLE) {
	require(lockers[_wallet].unlockTime < block.timestamp, "Wallet is already locked");
        lockers[_wallet] = Locker(_unlockTime);
    }

    function initialize(
        string memory tokenName,
        string memory tokenSymbol,
        uint256 amount,
	address pauser
    ) initializer public {
        
        __ERC20_init(tokenName, tokenSymbol);
        __Pausable_init();
        __AccessControl_init();
        __ERC20Permit_init(tokenName);
        __UUPSUpgradeable_init();

	_mint(msg.sender, amount * 10 ** decimals());

        _grantRole(DEFAULT_ADMIN_ROLE, msg.sender);
        _grantRole(PAUSER_ROLE, pauser);
        _grantRole(UPGRADER_ROLE, msg.sender);
    }

    function pause() public onlyRole(PAUSER_ROLE) {
        _pause();
    }

    function unpause() public onlyRole(PAUSER_ROLE) {
        _unpause();
    }

    function _beforeTokenTransfer(address from, address to, uint256 amount)
        internal
        whenNotPaused
        onlyAfterUnlockTime(from)
        override
    {
        super._beforeTokenTransfer(from, to, amount);
    }

 
    function _authorizeUpgrade(address newImplementation)
        internal
        onlyRole(UPGRADER_ROLE)
        override
    {}
}

