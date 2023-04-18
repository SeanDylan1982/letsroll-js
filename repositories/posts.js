const Repository = require('./repository');

class PostsRepository extends Repository {}

module.exports = new PostsRepository('posts.json');
