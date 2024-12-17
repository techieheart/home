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
