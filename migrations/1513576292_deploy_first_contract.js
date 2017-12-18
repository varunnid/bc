var first_claim = artifacts.require("FirstClaimNotification.sol");

module.exports = function(deployer) {
    deployer.deploy(first_claim);
};
