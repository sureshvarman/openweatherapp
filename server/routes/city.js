var express = require('express');
var cities = require("all-the-cities");

var router = express.Router();

router.get('/', function(req, res) {
  var cityQuery = req.query.q || 'bangalore';

  res.json(cities.filter(city => {
    return city.name.toLowerCase().indexOf(cityQuery.toLowerCase()) > -1
  }));

});

module.exports = router;
