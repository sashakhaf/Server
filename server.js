var express = require('express');
var fetch = require("node-fetch");
var app = express();
app.set('view engine', 'ejs');

var apiUrl = 'https://jsonplaceholder.typicode.com';

app.get('/', function (req, res) {
  var post;
  fetch(apiUrl + '/posts/1')
  	.then(response => response.json())
  	.then(json => res.render('index', {
        post: json
    }))
  // console.log(post)
  // res.render('index', {
  //       post: post
  //   })
})

// fetch('https://jsonplaceholder.typicode.com/posts/1')
//   .then(response => response.json())
//   .then(json => console.log(json))

app.listen(3000, function () {
  console.log('Listening on port 3000!')
})