var express = require('express');
var request = require('request-promise');

var config = require('../app.config.js')

var router = express.Router();

router.get('/', function(req, res) {
  var city = req.query.city || 'Bangalore';

  request({
    uri: 'http://api.openweathermap.org/data/2.5/weather?q=' + city + '&units=imperial&APPID=' + config.api.key,
    method: 'GET',
    json: true
  })
  .then(function(data) {
    res.json(data);
  }).catch(function(err) {
    res.status(err.statusCode || 500).send("OOPS!, something went wrong");
  });
});

module.exports = router;
