const FirstClaimNotification = artifacts.require('FirstClaimNotification')

contract('HelloWorld', function(accounts) {
    it('sets the first account as the contract creator', async function() {
        // This give a truffle abstraction which allow us to interact with our contracts.
        const contract = await FirstClaimNotification.deployed()

        // Once we have the "contract" we can make calls or transations and then assert.
        // The following is making a call to get the creator.
        const creator = await contract.getDetails(20)

        console.log(creator)

    })

});

