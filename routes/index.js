var express = require('express');
var router = express.Router();
var fs = require('fs')
var Web3 = require('Web3')
var abc = new Web3(new Web3.providers.HttpProvider("http://localhost:8545"));

var contract = require('truffle-contract')

var data = fs.readFileSync('/Users/varunnidhi/bc/build/contracts/FirstClaimNotification.json','utf-8')

console.log(JSON.parse(data))

var FC = contract(JSON.parse(data))

FC.setProvider(abc.currentProvider)
    // FC.currentProvider.sendAsync = function() {
    //     return contract.currentProvider.send.apply(
    //         contract.currentProvider, arguments
    //     );
    // };


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

FC.at('0xa076196f276a7c54137bf88b2440c8b3dfe52ea9', function (insa) {
    console.log(insa)
}).then(function (value) { console.log(value) }).catch(function (reason) { console.log(reason) })

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Exprokokess',opo: 'rohanok' });
});

module.exports = router;
