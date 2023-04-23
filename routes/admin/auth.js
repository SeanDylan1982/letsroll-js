const express = require('express');

const { handleErrors } = require('./middlewares');
const usersRepo = require('../../repositories/users');
const signupTemplate = require('../../views/admin/auth/signup');
const signinTemplate = require('../../views/admin/auth/signin');
const {
  requireEmail,
  requirePassword,
  requirePasswordConfirmation,
  requireEmailExists,
  requireValidPasswordForUser
} = require('./validators');

const router = express.Router();

router.get('/signup', (req, res) => {
  res.send(signupTemplate({ req }));
});

router.post(
  '/signup',
  [requireEmail, requirePassword, requirePasswordConfirmation],
  handleErrors(signupTemplate),
  async (req, res) => {
    const { email, password } = req.body;
    const user = await usersRepo.create({ email, password });

    req.session.userId = user.id;

    res.redirect('/signin');
  }
);

router.get('/signout', (req, res) => {
  req.session = null;
  res.send('You are logged out').redirect('/');
});

// router.get('/news', (req, res) => {
//   res.redirect('/news');
// });

// router.get('/carding', (req, res) => {
//   res.redirect('/carding');
// });

// router.get('/gallery', (req, res) => {
//   res.redirect('/gallery');
// });

// router.get('/constitution', (req, res) => {
//   res.redirect('/constitution');
// });

// router.get('/directions', (req, res) => {
//   res.redirect('/directions');
// });

// router.get('/contact', (req, res) => {
//   res.redirect('/contact');
// });

// router.get('/popia', (req, res) => {
//   res.redirect('/popia');
// });

router.post(
  '/signin',
  [requireEmailExists, requireValidPasswordForUser],
  handleErrors(signinTemplate),
  async (req, res) => {
    const { email } = req.body;

    const user = await usersRepo.getOneBy({ email });

    req.session.userId = user.id;

    res.redirect('/');
  }
);

module.exports = router;
