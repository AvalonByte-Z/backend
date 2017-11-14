const express = require('express')
var bodyParser = require('body-parser');
var logger = require('morgan');
const app = express();

//--------------------------------------------------

var questions = require('./routes/questions');

//--------------------------------------------------

//Mongo Connection goes here

//--------------------------------------------------

app.use(bodyParser.json());
app.use(logger('dev'));

//--------------------------------------------------
// API End Point (Questions, Answers, Users, etc)

app.use('/questions', questions);

//--------------------------------------------------

app.get('/', function (req, res) {
  res.send('TOPPPP !');
})

app.listen(3000, function () {
  console.log('Server listening on port 3000!');
})

//--------------------------------------------------

module.exports = app;