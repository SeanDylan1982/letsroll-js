const express = require('express');
const redirect = require('redirect');

const router = express.Router();

router.get('/', (req, res) => {
  res.redirect('../views/popia');
});

module.exports = router;
