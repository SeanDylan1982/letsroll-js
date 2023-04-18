const layout = require('../layout');

module.exports = ({ posts }) => {
  const renderedPosts = posts
    .map(post => {
      return `
        <div class="column is-one-quarter">
          <div class="card post-card">
            <figure>
              <img src="data:image/png;base64, ${post.image}"/>
            </figure>
            <div class="card-content">
              <h3 class="subtitle">${post.title}</h3>
              <h5>$${post.price}</h5>
            </div>
            <footer class="card-footer">
              <form action="/cart/posts" method="POST">
                <input hidden value="${post.id}" name="postId" />
                <button class="button has-icon is-inverted">
                  <i class="fa fa-shopping-cart"></i> Add to cart
                </button>
              </form>
            </footer>
          </div>
        </div>
      `;
    })
    .join('\n');

  return layout({
    content: `
      <section class="banner">
        <div class="container">
          <div class="columns is-centered">
            <img src="/images/banner.jpg" />
          </div>
        </div>
      </section>
      
      <section>
        <div class="container">
          <div class="columns">
            <div class="column "></div>
            <div class="column is-four-fifths">
              <div>
                <h2 class="title text-center">Featured Items</h2>
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
