const layout = require('../layout');
const slides = document.querySelectorAll(".slide");
const gallery = document.querySelectorAll(".gallery");

gallery.forEach(function (gallery, index) {
  gallery.style.left = `${index * 100}%`;
});

slides.forEach(function (slide, index) {
  slide.style.left = `${index * 100}%`;
});

let slidesCounter = 0;
let galleryCounter = 0;

function slidesCarousel() {
  slidesCounter++;
  if (slidesCounter === 7) {
    slidesCounter = 0;
  }
  slides.forEach(function (slide) {
    slide.style.transform = `translateX(-${slidesCounter * 100}%)`;
  });
};
setInterval(slidesCarousel, 5000);

function galleryCarousel() {
  galleryCounter++;
  if (galleryCounter === 7) {
    galleryCounter = 0;
  }
  gallery.forEach(function (gallery) {
    gallery.style.transform = `translateX(-${galleryCounter * 100}%)`;
  });
};
setInterval(galleryCarousel, 5000);

module.exports = ({ gallery }) => {
  const renderedGallery = `
    <div class="gallery-container" id="gallery-container-icon">
        <img src="./img/gallery.png" alt="gallery logo" id="gallery-img">
        <div class="disclaimer" id="gallery-disclaimer">
          <h2>Gallery</h2>
          <p>
          <div class="slider-container">
            <div class="slide">
              <img src="./img/nbc-4.png" alt="an image" class="slide-image">
            </div>
            <div class="slide">
              <img src="./img/nbc-1.png" alt="an image" class="slide-image">
            </div>
            <div class="slide">
              <img src="./img/nbc-3.png" alt="an image" class="slide-image">
            </div>
            <div class="slide">
              <img src="./img/nbc-2.png" alt="an image" class="slide-image">
            </div>
            <div class="slide">
              <img src="./img/mural.png" alt="an image" class="slide-image">
            </div>
            <div class="slide">
              <img src="./img/nbc-5.png" alt="an image" class="slide-image">
            </div>
            <div class="slide">
              <img src="./img/modderfontein-trips.png" alt="an image" class="slide-image">
            </div>
          </div>
          </p>
        </div>
      </div>
      `;
    };

return layout({
  content: `
    <section>
      <div class="container">
        <div class="columns">
          <div class="column "></div>
          <div class="column is-four-fifths">
            <div>
              <div class="columns posts">
                ${renderedCardings}
              </div>
            </div>
          </div>
          <div class="column "></div>
        </div>
      </div>
    </section>
  `
});
