const express = require('express');
const newsIndexTemplate = require('../views/news');

const router = express.Router();

router.get('/', (req, res) => {
  res.send(newsIndexTemplate({ news }));
});

module.exports = router;
