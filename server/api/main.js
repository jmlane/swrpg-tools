var router = require('express').Router();
var characters = require('../data/characters');

router.get('/characters', function (req, res) {
  res.json(characters);
});

module.exports = router;
