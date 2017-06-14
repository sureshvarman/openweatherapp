var express = require('express');

var router = express.Router();

router.use('/v1/weather', require('./weather'));
router.use('/v1/city', require('./city'));

module.exports = router;
