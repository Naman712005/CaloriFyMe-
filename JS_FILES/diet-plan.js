const images = document.querySelectorAll("#box2 .fade-img");
let currentIndex = 0;

function showNextImage() {
    // Remove 'active' class from the current image
    images[currentIndex].classList.remove("active");

    // Calculate the next index (loop back to 0 if at the end)
    currentIndex = (currentIndex + 1) % images.length;

    // Add 'active' class to the next image
    images[currentIndex].classList.add("active");
}

// Initialize the first image as active
images[currentIndex].classList.add("active");

// Change images every 3 seconds (adjust as needed)
setInterval(showNextImage, 3000);
