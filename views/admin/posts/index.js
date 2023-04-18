const layout = require('../layout');

module.exports = ({ posts }) => {
  const renderedPost = posts
    .map(post => {
      return `
      <tr>
        <td>${post.title}</td>
        <td>${post.price}</td>
        <td>
          <a href="/admin/posts/${post.id}/edit">
            <button class="button is-link">
              Edit
            </button>
          </a>
        </td>
        <td>
          <form method="POST" action="/admin/posts/${post.id}/delete">
            <button class="button is-danger">Delete</button>
          </form>
        </td>
      </tr>
    `;
    })
    .join('');

  return layout({
    content: `
      <div class="control">
        <h1 class="subtitle">My posts</h1>
        <a href="/admin/posts/new" class="button is-primary">New Post</a>
      </div>
      <table class="table">
        <thead>
          <tr>
            <th>Title</th>
            <th>Price</th>
            <th>Edit</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          ${renderedPost}
        </tbody>
      </table>
    `
  });
};
