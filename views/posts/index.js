const layout = require('../layout');

module.exports = ({ posts }) => {
  const renderedPosts = posts
    .map(post => {
      return `
        <div class="column is-three-quarter post">
          <div class="card post-card" style="position: relative; display: flex; flex-direction: row; align-items: left; justify-content: left; width: 100%; height: 300px; margin-top: 100px; border: 1px solid #1a1a1a55;">
            <figure style="float: left; align-items: left; text-align: left; justify-content: left; border: 1px solid #1a1a1a55;">
              <img src="data:image/png;base64, ${post.image}" style="width: 250px; height: 250px; margin: 10px;"/>
            </figure>
            <div class="card-content" style="border: 1px solid #1a1a1a55; width: 75%; height: 350px;">
              <h3 class="subtitle">${post.title}</h3>
              <p>${post.body}</p>
              <footer class="card-footer" style="position: absolute; bottom: 5px; width: 70%; height: 50px; float: right; justify-content: right;">
                <form action="/cart/posts" method="POST">
                  <input hidden value="${post.id}" name="postId" />
                  <button class="button has-icon is-inverted">
                  <i class="fa fa-thumbs-up">  </i> Like
                  </button>
                  <button class="button has-icon is-inverted">
                  <i class="fa fa-thumbs-down">  </i> Dislike
                  </button>
                  <input type="text" name="comment" placeholder="Comment" style="position: relative; height: 40px; width: 40%; border-radius: 10px;"></input>
                  <button class="button has-icon is-inverted">
                    <i class="fa fa-share">  </i> Share
                  </button>
                </form>
              </footer>
            </div>
          </div>
        </div>
      `;
    })
    .join('\n');

  return layout({
    content: `
      <section>
        <div class="container">
          <div class="columns">
            <div class="column "></div>
            <div class="column is-four-fifths">
              <div>
                <div class="columns posts">
                  ${renderedPosts}
                </div>
              </div>
            </div>
            <div class="column "></div>
          </div>
        </div>
      </section>
    `
  });
};
