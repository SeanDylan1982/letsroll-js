const layout = require('../layout');
const { getError } = require('../../helpers');

module.exports = ({ post, errors }) => {
  return layout({
    content: `
      <div class="columns is-centered">
        <div class="column is-half">
          <h1 class="subtitle">Edit a post</h1>

          <form method="POST" enctype="multipart/form-data">
            <div class="field">
              <label class="label">Title</label>
              <input value="${
                post.title
              }" class="input" placeholder="Title" name="title">
              <p class="help is-danger">${getError(errors, 'title')}</p>
            </div>
            
            <div class="field">
              <label class="label">Body</label>
              <input value="${
                post.body
              }" class="input" placeholder="Body" name="body">
              <p class="help is-danger">${getError(errors, 'body')}</p>
            </div>
            
            <div class="field">
              <label class="label">Image</label>            
              <input type="file" name="image" />
            </div>
            <br />
            <button class="button is-primary">Edit</button>
          </form>
        </div>
      </div>
    `
  });
};
