/* user.js 
Eduardo Fernandes 
ID 301290717 
May 31, 2023 
*/



var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

module.exports = router;
