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

const tooltipGalleryBtn = document.getElementById('tooltip-gallery-img');
const tooltipGalleryDisclaimerText = document.getElementById("tooltip-gallery-disclaimer");

function tooltipGalleryDisclaimer() {
  tooltipGalleryDisclaimerText.classList.toggle('hidden')
}
tooltipGalleryBtn.addEventListener("click", tooltipGalleryDisclaimer)

const tooltipSlides = document.querySelectorAll(".tooltip-slide");
const tooltipGallery = document.querySelectorAll(".tooltip-gallery");

tooltipGallery.forEach(function (tooltipGallery, index) {
  tooltipGallery.style.left = `${index * 100}%`;
});

tooltipSlides.forEach(function (tooltipSlide, index) {
  tooltipSlide.style.left = `${index * 100}%`;
});

let tooltipSlidesCounter = 0;
let tooltipGalleryCounter = 0;

function tooltipSlidesCarousel() {
  tooltipSlidesCounter++;
  if (tooltipSlidesCounter === 6) {
    tooltipSlidesCounter = 0;
  }
  tooltipSlides.forEach(function (tooltipSlide) {
    tooltipSlide.style.transform = `translateX(-${tooltipSlidesCounter * 100}%)`;
  });
};
setInterval(tooltipSlidesCarousel, 5000);

function tooltipGalleryCarousel() {
  tooltipGalleryCounter++;
  if (tooltipGalleryCounter === 7) {
    tooltipGalleryCounter = 0;
  }
  tooltipGallery.forEach(function (tooltipGallery) {
    tooltipGallery.style.transform = `translateX(-${tooltipGalleryCounter * 100}%)`;
  });
};
setInterval(tooltipGalleryCarousel, 5000);

const popiBtn = document.getElementById('popi-img');
  const popiDisclaimerText = document.getElementById("popi-disclaimer");
  
  function popiDisclaimer() {
    popiDisclaimerText.classList.toggle('hidden')
  }
  popiBtn.addEventListener("click", popiDisclaimer)
  
  const newsBtn = document.getElementById('news-img');
  const newsDisclaimerText = document.getElementById("news-disclaimer");
  
  function newsDisclaimer() {
    newsDisclaimerText.classList.toggle('hidden')
  }
  newsBtn.addEventListener("click", newsDisclaimer)
  
  const cardingsBtn = document.getElementById('cardings-img');
  const cardingsDisclaimerText = document.getElementById("cardings-disclaimer");
  
  function cardingsDisclaimer() {
    cardingsDisclaimerText.classList.toggle('hidden')
  }
  cardingsBtn.addEventListener("click", cardingsDisclaimer)
  
  const contactBtn = document.getElementById('contact-img');
  const contactDisclaimerText = document.getElementById("contact-disclaimer");
  
  function contactDisclaimer() {
    contactDisclaimerText.classList.toggle('hidden')
  }
  contactBtn.addEventListener("click", contactDisclaimer)
