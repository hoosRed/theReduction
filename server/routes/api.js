const express = require('express');
const router = express.Router();
var User = require('/Users/tylerredshaw/Documents/webDev2/template/meanClone/mean4plus/models/user.js');
var Member = require('/Users/tylerredshaw/Documents/webDev2/template/meanClone/mean4plus/models/member.js');
var Rep = require('/Users/tylerredshaw/Documents/webDev2/template/meanClone/mean4plus/models/rep.js');

var bcrypt = require('bcryptjs');
var jwt = require('jsonwebtoken');

router.post('/signin', function(req, res, next) {
  User.findOne({userName: req.body.userName}, function(err, user){
    if(err){
      return res.status(500).json({
        title: 'returned error',
        error: err
      });
    }
    if(!user) {
      return res.status(500).json({
        title: 'userName is wrong',
        error: { message: 'Username could not be found' }
      });
      return alert("user is fucked");
    }
    if(!bcrypt.compareSync(req.body.password, user.password)){
      //NEED TO CALL CHANGE USER HERE?
      return res.status(401).json({
        title: 'Password failed',
        error: { message: 'password failed'}
      });
      return alert("password is fucked");
    }else{
    var token = jwt.sign({user: user},'secretkey',{expiresIn: 7200});
      console.log('TOKEN IS:   ' + token);
      console.log('USER IS:   ' + user);
      // res.status(200).send(user);
    };
    // res.status(200).send(user);
    // res.status(200).toObject(user);
    console.log('Stringify' + JSON.stringify(user));
    res.status(200).json({
      message: 'Successfully logged in',
      token: token,
      user: JSON.stringify(user)
    });
  });
});

// SIGNUP ROUTE
router.post('/signup',function(req, res, next){
  console.log("/signup route is here");
  var user = new User({
    email: req.body.email,
    userName: req.body.userName,
    password: bcrypt.hashSync(req.body.password, 10),//storing encrypted password
    referral: req.body.referral,
    favorites: []

  });
  user.save(function(err, result){
    if(err){
      return res.status(500).json({
        title: 'An error occured',
        error: err
      });
    }else {
      var token = jwt.sign({user: user}, 'secretkey', {expiresIn: 7200});
      var user = this.result;
      console.log("this is the result of signing: " + result);
    };
      res.status(201).json({
        message: 'User created',
        token: token,
        userName: user,
        result: result
    });
  });
});
// For Account Settings
router.get('/settings', function(req, res, next){
  User.findOne({email: 'redshawtj@yahoo.com'}, function(err, user){
    if(err) {
      return res.status(500).json({
        title: 'returned error',
        error: err
      });
    }else{

    }
  });
});
//UPDATE FAVORITE INFORMATION ROUTE
router.post('/favorite',function(req, res, next){
  console.log('the favorite route');

  var query = { userName: req.body.user.userName };
  var favMember = req.body.member;
  console.log('req.body.user: ' + query);
  console.log('req.body.member: ' + favMember);

  User.findOneAndUpdate(query, {"$push":{"favorites": favMember}}, {new: true}, function(err,raw){
    if(err){
      return res.status(500).json({
        title: 'returned error',
        error: err
      });

    }else{
      var updatedFavList = raw;
      console.log("updated fav list: " + updatedFavList);
      console.log('else');
      console.log(raw);
  }

    console.log('MONGODB RESPONSE:  ' + updatedFavList);
    res.status(200).json({
      favorites: JSON.stringify(raw.favorites) ,
      message: 'find the response message on the front end'
    });
  });
});

router.post('/unfavorite',function(req, res, next){
  console.log('the unfavorite route');

  var query = { userName: req.body.user.userName };
  var favMember = req.body.member;
  console.log('req.body.user: ' + query);
  console.log('req.body.member: ' + favMember);

  User.findOneAndUpdate(query, {"$pull":{"favorites": favMember}}, {new: true}, function(err,raw){
    if(err){
      return res.status(500).json({
        title: 'returned error',
        error: err
      });

    }else{
      var updatedFavList = raw;
      console.log("updated fav list: " + updatedFavList);
      console.log('else');
      console.log(raw);
    }

    console.log('MONGODB RESPONSE:  ' + updatedFavList);
    res.status(200).json({
      favorites: JSON.stringify(raw.favorites) ,
      message: 'find the response message on the front end'
    });
  });
});

router.get('/members', function(req, res, next){
  //need politician model
  Member.find()
    .exec(function(err, members){
      if(err){
        return res.status(500).json({  //return exits the if statement before the else
          title: 'an error occured',
          error: err
        });
      }
      res.status(200).json({
        message: 'Success',
        data: members
      });
    });
});

router.get('/reps', function(req, res, next){
  //need politician model
  Rep.find()
    .exec(function(err, reps){
      if(err){
        return res.status(500).json({  //return exits the if statement before the else
          title: 'an error occured',
          error: err
        });
      }
      res.status(200).json({
        message: 'Success',
        data: reps
      });
    });
});

module.exports = router;

