var express = require('express');
var router = express.Router();
var fs = require('fs')
var Web3 = require('web3')
var abc = new Web3(new Web3.providers.HttpProvider("http://localhost:8545"));

var contract = require('truffle-contract')

var data = fs.readFileSync('/home/nagarro/ethereum/bc/build/contracts/FirstClaimNotification.json','utf-8')

//console.log(JSON.parse(data))

var FC = contract(JSON.parse(data))

FC.setProvider(abc.currentProvider)
    // FC.currentProvider.sendAsync = function() {
    //     return contract.currentProvider.send.apply(
    //         contract.currentProvider, arguments
    //     );
    // };

  //  console.log();

// var mycon = FC.at('0x73b3a84c3d3c74782010b4013d3ebf2bac2fbf3c', function (a,r) {
//
//   console.log(a)
//     console.log(r)
// })

//Fc.at

// FC.deployed().then(function(instance) {
//     var deployed = instance;
//     console.log(deployed)
//     return instance
// }).then(function(result) {
//     // Do something with the result or continue with more transactions.
//     console.log(result)
// }).catch(function (reason) { console.log(reason) });

console.log('started');


FC.at('0x863ff4b20d34507c79249b19c712d8ca48895a3b', function (insa) {
    //console.log(insa)
}).then(function (value) { 
    
  //  console.log(value) 
  

}).catch(function (reason) {
        
    //    console.log(reason) 
    })

   // console.log(abc.eth.coinbase);
  console.log('hi');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'FNOL - Make it easy',opo: 'rohanok' });
});

router.post('/getData', function(req, res, next) {
    console.log('hello');
    FC.deployed().then(function(instance) {
  //  var deployed = instance;
  //  console.log(deployed)
    return instance
}).then( async function(result) {
    // Do something with the result or continue with more transactions.
   // console.log(result)
   var pry =require('pryjs')
//eval(pry.it)
   var new_account = abc.personal.newAccount("rohan");
   //console.log(new_account);
   //abc.eth.coinbase = new_account;
   console.log(abc.eth.accounts[0]);
   abc.eth.defaultAccount = abc.eth.accounts[0];
  // abc.personal.unlockAccount(abc.eth.accounts[0],"0a35982e6008bf88ad837bd2fece825600d782947650145c17f8c3c590a94ad9",1500)
  // console.log(abc.eth.defaultAccount);
   console.log(abc.personal.unlockAccount(new_account,"rohan",15000));
  // const contract = await FC.deployed();
 // eval(pry.it)
    
   var trans =  await result.reportLoss('theft',12345, 22000,'12-01-2017',new_account);
   //console.log(trans)


}).catch(function (reason) { console.log(reason) });
  });


module.exports = router;