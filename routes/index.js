var express = require('express');
var router = express.Router();
var https = require('https');
var passport = require('passport');
var ensureLoggedIn = require('connect-ensure-login').ensureLoggedIn();
router.get("/",function(req,res,next)
{
  res.render("index");
});
router.get("/user",function(req,res,next)
{
  res.render("index",{"title":global.user});
});
router.get('/users', function(req,res,next)
{
  res.send("display this here");
  next();
},function(req,res,next)
{
console.log("and we are here too");
next();
},function(req,res)
{
console.log("and finally here");
});
router.get('/logout', function(req, res){
  global.user=""
  req.logout();
  res.redirect('/');
});
router.get('/login',
  function(req, res){
    res.render('users', { env: process.env });
  });
  router.get('/callback',
  passport.authenticate('auth0', { failureRedirect: '/' }),
  function(req, res) {
global.user=req.user;
    res.redirect(req.session.returnTo || '/user');
  });
module.exports = router;
