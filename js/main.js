/*=============== CHANGE BACKGROUND HEADER ===============*/

/*=============== CHANGE BACKGROUND HEADER ===============*/

const scrollHeader = () => {
  const header = document.getElementById("header"); // Corrected method to get the header element

  // Toggle the "scroll-header" class based on the scroll position
  header.classList.toggle("scroll-header", window.scrollY >= 50);
};

// Add an event listener for the scroll event
window.addEventListener("scroll", scrollHeader);

// Function to animate counters with a '+' suffix and decimal formatting
function animateCounter(selector, duration = 2000) {
  // Loop through each element with the specified selector
  $(selector).each(function () {
    // Set an initial property "Counter" with a starting value of 0
    $(this)
      .prop("Counter", 0) // Initialize Counter property
      .animate(
        {
          Counter: $(this).text(), // Target value is the text inside the element
        },
        {
          duration: duration, // Animation duration (default is 2000ms)
          easing: "swing", // Easing function for smooth animation
          step: function (now) {
            // Format the current animation step value
            now = Number(now).toFixed(1); // Display one decimal place
            now = Number(now).toLocaleString("en"); // Add commas for large numbers
            $(this).text(now + "+"); // Update text with formatted value and '+' suffix
          },
        }
      );
  });
}

// Call the animateCounter function on elements with the "counter" class
animateCounter(".counter", 2000);

document.addEventListener("DOMContentLoaded", function () {
  // Select the play button inside the thumbnail
  const playButton = document.querySelector(".play-button");

  // Add an event listener to the play button
  playButton.addEventListener("click", function () {
    // Select the video container, thumbnail, and popup
    const videoContainer = document.querySelector(".video__container");
    const videoThumbnail = document.querySelector(".video__thumbnail");
    const videoPopup = document.querySelector(".video__popup");

    // Add the 'active' class to the video container to show the video
    videoContainer.classList.add("active");

    // Hide the thumbnail image
    videoThumbnail.style.display = "none";

    // Show the video by making the popup visible
    videoPopup.style.display = "block";
  });
});

// FAQ Features
document.addEventListener("DOMContentLoaded", function () {
  // Select all FAQ questions (h3 elements)
  const faqQuestions = document.querySelectorAll(".faq-question");

  // Loop through each FAQ question
  faqQuestions.forEach(function (question) {
    // Attach click event listener to each question
    question.addEventListener("click", function () {
      // Get the answer (next sibling element)
      const answer = this.nextElementSibling;
      const icon = this.querySelector(".faq-icon i"); // Get the icon element

      // Close all answers and reset icons
      document.querySelectorAll(".faq-answer").forEach(function (otherAnswer) {
        if (otherAnswer !== answer) {
          otherAnswer.style.maxHeight = null; // Collapse all other answers
          otherAnswer.classList.remove("open"); // Remove the 'open' class
        }
      });

      // Reset all icons to plus (+)
      document.querySelectorAll(".faq-icon i").forEach(function (otherIcon) {
        otherIcon.classList.remove("ri-subtract-line");
        otherIcon.classList.add("ri-add-line");
      });

      // If the clicked answer was not open, expand it; else, collapse it
      const isOpen = answer.style.maxHeight;
      if (!isOpen) {
        answer.style.maxHeight = answer.scrollHeight + "px"; // Expand the answer smoothly
        answer.classList.add("open"); // Apply padding immediately after expansion
        icon.classList.remove("ri-add-line"); // Change to minus icon
        icon.classList.add("ri-subtract-line"); // Add minus icon
      } else {
        answer.style.maxHeight = null; // Collapse the answer
        answer.classList.remove("open"); // Remove padding
        icon.classList.remove("ri-subtract-line"); // Change to plus icon
        icon.classList.add("ri-add-line"); // Add plus icon
      }
    });
  });
});

// Swiper Slider

const product = new Swiper(".product-slider", {
  loop: true, // Optional: for continuous loop
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  },
  slidesPerView: 3, // Adjust as needed
  spaceBetween: 10, // Adjust as needed
  centeredSlides: true,
});

var testimonial = new Swiper(".testimonial", {
  loop: true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  },
  centeredSlides: true,
});
