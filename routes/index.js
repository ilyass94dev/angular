var express = require('express');
var router = express.Router();
var https = require('https');
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express',today:new Date(Date.now())});
});
router.get('/users',function(req,res,next)
{
    console.log("hello the world");
    res.send({title:"thats it"});
});
module.exports = router;
