var express = require('express');
var router = express.Router();
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express',today:new Date(Date.now())});
});
router.get('/home',function(req,res,next)
{
  console.log("hello the world");
  return next();
},function(req,res,next)
{
    res.send("this is the home page");
});
module.exports = router;
