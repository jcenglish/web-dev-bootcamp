var express = require('express');
var app = express();
var bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({extended: true}));

app.set('view engine', 'ejs');

var friends = ['tony', 'miranda', 'justin', 'pierre','lily']

app.get('/', function(req, res){
  res.render('home');
});

app.post('/addfriend', function(req, res){
  var newFriend = req.body.newfriend;
  friends.push(newFriend);
 // res.send('you have reached the post route.');
  res.redirect('/friends');
});

app.get('/friends', function(req, res){

  res.render('friends', {friends: friends});
});

app.listen('3000', process.env.IP, function(){
  console.log('server started!');
});