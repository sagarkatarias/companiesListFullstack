const fs = require('fs');

var express = require('express');
var router = express.Router();

const companies = fs.readFileSync('routes/MOCK_DATA.json');

/* GET users listing. */
router.get('/', (req, res, next) => {
  res.send(JSON.parse(companies));
});

module.exports = router;
