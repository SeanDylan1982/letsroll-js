const express = require('express');
const bodyParser = require('body-parser');
const cookieSession = require('cookie-session');
const authRouter = require('./routes/admin/auth');
const adminPostsRouter = require('./routes/admin/posts');
const postsRouter = require('./routes/posts');

const app = express();

app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(
  cookieSession({
    keys: ['lkasld235j']
  })
);
app.use(authRouter);
app.use(postsRouter);
app.use(adminPostsRouter);
app.listen(3000, () => {
  console.log('Listening on port 3000');
});
