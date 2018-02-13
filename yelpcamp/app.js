var express = require('express');
var app = express();


app.set('view engine', 'ejs');

app.get('/', function(req, res) {
  res.render('landing');
});

app.get('/campgrounds', function(req, res) {
  var campgrounds = [
    {name: 'Salmon Creek', image: ''},
    {name: 'Camp Onowana', image: ''},
    {name: 'Deer Key', image: ''}
  ];
  
  res.render('campgrounds', {campgrounds:campgrounds});
});

app.listen(3000, process.env.IP, function() {
  console.log('server started');
});