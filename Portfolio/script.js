// Toggle visibility function
const toggleVisibility = (element) => {
  if (element.style.display === 'none' || !element.style.display) {
    element.style.display = 'block';
  } else {
    element.style.display = 'none';
  }
};

// Attach event listeners to all toggle buttons
document.querySelectorAll('.toggle-btn').forEach((button) => {
  button.addEventListener('click', () => {
    const details = button.nextElementSibling;
    toggleVisibility(details);
  });
});


// Toggle About Me section
document.querySelector('.about-header').addEventListener('click', () => {
  const aboutContainer = document.querySelector('#about-me-container');
  toggleVisibility(aboutContainer);
});

// Toggle Resume section
document.querySelector('.resume-thumbnail').addEventListener('click', () => {
  const resumeContainer = document.querySelector('.resume-container');
  toggleVisibility(resumeContainer);
});

// // Toggle About Me section
// document.querySelector('.about-header').addEventListener('click', function() {
//   const aboutContainer = document.querySelector('.about-container');
//   toggleVisibility(aboutContainer); // Use the function to toggle visibility
// });
