// ---------------------------------------------
// Countdown function
// ---------------------------------------------
function countdown() {
  let seconds = 10; // Start from 10
  const display = document.getElementById("countdown");

  // Set an interval to count down every second
  const interval = setInterval(function () {
    seconds--;
    display.innerText = seconds;

    // Stop the countdown at 0
    if (seconds <= 0) {
      clearInterval(interval);
      display.innerText = "Time's up!";
    }
  }, 1000);
}

// ---------------------------------------------
// Slideshow functionality
// ---------------------------------------------

let slideIndex = 0; // Track the current slide

// Function to automatically cycle through slides
function showSlides() {
  const slides = document.getElementsByClassName("slide");

  // Hide all slides
  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }

  // Move to the next slide
  slideIndex++;
  if (slideIndex > slides.length) { slideIndex = 1; }

  // Show the current slide
  slides[slideIndex - 1].style.display = "block";

  // Change slide every 3 seconds
  setTimeout(showSlides, 3000);
}

// Start the slideshow when the page loads
showSlides();
