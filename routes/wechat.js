var express = require('express');
var router = express.Router();

router.get('/', function (req, res) {
  console.log('Get request from wx: ', req.originalUrl);
  res.end();
});

router.post('/', function (req, res) {
  console.log('Post request from wx: ', req.originalUrl);
  console.log('Post data: ', req.body);
  res.end();
});