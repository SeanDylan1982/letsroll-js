const express = require('express');
const postsRepo = require('../repositories/posts');
const postsIndexTemplate = require('../views/posts/index');

const router = express.Router();

router.get('/', async (req, res) => {
  const posts = await postsRepo.getAll();
  res.send(postsIndexTemplate({ posts }));
});

module.exports = router;
