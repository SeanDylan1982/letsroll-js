const express = require('express');
const multer = require('multer');

const { handleErrors, requireAuth } = require('./middlewares');
const postsRepo = require('../../repositories/posts');
const postsNewTemplate = require('../../views/admin/posts/new');
const postsIndexTemplate = require('../../views/admin/posts/index');
const postsEditTemplate = require('../../views/admin/posts/edit');
const { requireTitle, requireBody } = require('./validators');

const router = express.Router();
const upload = multer({ storage: multer.memoryStorage() });

router.get('/admin/posts', requireAuth, async (req, res) => {
  const posts = await postsRepo.getAll();
  res.send(postsIndexTemplate({ posts }));
});

router.get('/admin/posts/new', requireAuth, (req, res) => {
  res.send(postsNewTemplate({}));
});

router.post(
  '/admin/posts/new',
  requireAuth,
  upload.single('image'),
  [requireTitle, requireBody],
  handleErrors(postsNewTemplate),
  async (req, res) => {
    const image = req.file.buffer.toString('base64');
    const { title, body } = req.body;
    await postsRepo.create({ title, body, image });

    res.redirect('/admin/posts');
  }
);

router.get('/admin/posts/:id/edit', requireAuth, async (req, res) => {
  const post = await postsRepo.getOne(req.params.id);

  if (!post) {
    return res.send('post not found');
  }

  res.send(postsEditTemplate({ post }));
});

router.post(
  '/admin/posts/:id/edit',
  requireAuth,
  upload.single('image'),
  [requireTitle, requireBody],
  handleErrors(postsEditTemplate, async req => {
    const post = await postsRepo.getOne(req.params.id);
    return { post };
  }),
  async (req, res) => {
    const changes = req.body;

    if (req.file) {
      changes.image = req.file.buffer.toString('base64');
    }

    try {
      await postsRepo.update(req.params.id, changes);
    } catch (err) {
      return res.send('Could not find item');
    }

    res.redirect('/admin/posts');
  }
);

router.post('/admin/posts/:id/delete', requireAuth, async (req, res) => {
  await postsRepo.delete(req.params.id);

  res.redirect('/admin/posts');
});

module.exports = router;
