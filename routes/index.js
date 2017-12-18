var express = require('express');
var router = express.Router();
web3 = new Web3(new Web3.providers.HttpProvider("http://localhost:8545"));


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

module.exports = router;
