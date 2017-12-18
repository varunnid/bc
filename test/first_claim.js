const FirstClaimNotification = artifacts.require('FirstClaimNotification')

contract('HelloWorld', function(accounts) {
    it('sets the first account as the contract creator', async function() {
        // This give a truffle abstraction which allow us to interact with our contracts.
        const contract = await FirstClaimNotification.deployed()

        // Once we have the "contract" we can make calls or transations and then assert.
        // The following is making a call to get the creator.


    });

    it('sets the first account as the contract creator', async function() {
        // This give a truffle abstraction which allow us to interact with our contracts.
        const contract = await FirstClaimNotification.deployed()

        const creator = await contract.getCreator();
        console.log(creator)

       const t = await contract.reportLoss('theft',12345, 22000,'12-01-1201',"0xfd9cd27412733164d9a530158c3905912ef789eb");
       const t2 = await contract.reportLoss('theft',54321, 22000,'12-01-1201',"0xbdf28a25c54e708819512a620d646ad32b2d8ffa");

         console.log(t);
         console.log(t2);

        const loss = await contract.getLossDetails("0xfd9cd27412733164d9a530158c3905912ef789eb");
        const loss2 = await contract.getLossDetails("0xbdf28a25c54e708819512a620d646ad32b2d8ffa");

        console.log(loss)
        console.log(loss2)

    });

});

