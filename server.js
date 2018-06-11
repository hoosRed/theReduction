const express = require('express');
const bodyParser = require('body-parser');
var logger = require('morgan');
const path = require('path'); //read more about path
const http = require('http');
const app = express();
const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/mean');

// API file for interacting with MongoDB
const api = require('./server/routes/api');
const predictIt = require('./predictIt');

// Parsers
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false}));

// Angular DIST output folder - created by ng build
app.use(express.static(path.join(__dirname, 'dist')));

app.use(function (req, res, next) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  res.setHeader('Access-Control-Allow-Methods', 'POST, GET, PATCH, DELETE, OPTIONS');

  next(); //run the next middleware
});
// API location
app.use(logger('dev'));
app.use('/predictIt', predictIt);
app.use('/signin', api);
app.use('/signup', api);
app.use('/settings', api);
app.use('/favorite', api);
app.use('/api', api);
app.use('/', api);


// Send all other requests to the Angular app
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'dist/index.html'))
});

//Set Port
const port = process.env.PORT || '3000';
app.set('port', port);

const server = http.createServer(app);

server.listen(port, () => console.log(`Running on localhost:${port}`));
