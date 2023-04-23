const express = require('express');
const redirect = require('redirect');

const router = express.Router();

router.get('/', (req, res) => {
  res.redirect('../views/gallery');
});

module.exports = router;
