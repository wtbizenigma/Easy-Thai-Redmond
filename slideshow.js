const thumbnails = document.querySelectorAll(".thumbnail");
const slideshow = document.getElementById("slideshow");
const slideshowImage = document.getElementById("slideshow-image");
const closeBtn = document.getElementById("close-btn");
const prevBtn = document.getElementById("prev-btn");
const nextBtn = document.getElementById("next-btn");

let currentImageIndex = 0;
const images = Array.from(thumbnails).map((img) => img.src);

// Open slideshow
thumbnails.forEach((thumbnail, index) => {
  thumbnail.addEventListener("click", () => {
    currentImageIndex = index;
    showImage();
    slideshow.style.display = "flex";
  });
});

// Close slideshow
closeBtn.addEventListener("click", () => {
  slideshow.style.display = "none";
});

// Show the current image
function showImage() {
  slideshowImage.src = images[currentImageIndex];
}

// Navigate to the previous image
prevBtn.addEventListener("click", () => {
  currentImageIndex = (currentImageIndex - 1 + images.length) % images.length;
  showImage();
});

// Navigate to the next image
nextBtn.addEventListener("click", () => {
  currentImageIndex = (currentImageIndex + 1) % images.length;
  showImage();
});

// Close slideshow on outside click
slideshow.addEventListener("click", (e) => {
  if (e.target === slideshow) {
    slideshow.style.display = "none";
  }
});
