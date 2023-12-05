//Eder's Code
// Get all the image elements
const images = document.querySelectorAll('.services-container img');
const imageTextMarketing = document.getElementById('text-marketing');
const imageTextProgramming = document.getElementById('text-programming');
const imageTextLanguages = document.getElementById('text-languages');
const imageTextBusiness = document.getElementById('text-business');
const searchButton = document.getElementById('search-button');
const searchInput = document.getElementById('search-input');

// Wait for DOM content to be loaded
document.addEventListener('DOMContentLoaded', () => {
  const guessButton = document.querySelector('.guess-btn');
  const gameResult = document.querySelector('.game-result');

  guessButton.addEventListener('click', () => {
    // Clear game result container
    gameResult.innerHTML = '';

    // Generate a random number between 1 and 5
    const randomNumber = Math.floor(Math.random() * 5) + 1;

    let userChoice;
    while (userChoice !== randomNumber) {
      // ask user for a number
      userChoice = parseInt(prompt('Enter your guess (between 1 and 5):'));

      if (isNaN(userChoice) || userChoice <= 0 || userChoice > 5) {
        alert('Please enter a valid number between 1 and 5.');
      } else if (userChoice === randomNumber) {
        // Display a success message if correct
        const resultText = document.createElement('p');
        resultText.textContent = `Congratulations! You guessed the correct number: ${randomNumber}.`;
        gameResult.appendChild(resultText);
      }
    }
  });
});

// Search button
searchButton.addEventListener('click', () => {
  // Getting term and converting to lower case
  const searchTerm = searchInput.value.toLowerCase();

  // Loop through all h3 and p elements and highlight matching text
  document.querySelectorAll('h3, h2, label, p').forEach((element) => {
    const text = element.textContent.toLowerCase();

    if (text.includes(searchTerm)) {
      // Highlight the matching text
      const newText = text.replace(
        searchTerm,
        `<span class="search-highlight">${searchTerm}</span>`,
      );
      element.innerHTML = newText;
    }
  });
});

// Function to show text based on the clicked image
function showText(event) {
  event.preventDefault();

  // Determine which image was clicked and update text
  if (event.target.alt === 'marketing') {
    // Update texts for images
    imageTextMarketing.textContent =
      'This course will equip you with the essential skills to create effective marketing campaigns that resonate with your target audience.';
    imageTextProgramming.textContent = 'Programming';
    imageTextLanguages.textContent = 'Languages';
    imageTextBusiness.textContent = 'Business';
  } else if (event.target.alt === 'programming') {
    imageTextProgramming.textContent =
      'This course will guide you through the fundamentals of programming languages like Python, Java, and C++.';
    imageTextMarketing.textContent = 'Marketing';
    imageTextLanguages.textContent = 'Languages';
    imageTextBusiness.textContent = 'Business';
  } else if (event.target.alt === 'languages') {
    imageTextLanguages.textContent =
      'Develop conversational fluency and gain insights into different cultural perspectives.';
    imageTextProgramming.textContent = 'Programming';
    imageTextMarketing.textContent = 'Marketing';
    imageTextBusiness.textContent = 'Business';
  } else if (event.target.alt === 'business') {
    imageTextBusiness.textContent =
      'This course will provide you with essential knowledge in areas like finance and leadership!';
    imageTextProgramming.textContent = 'Programming';
    imageTextLanguages.textContent = 'Languages';
    imageTextMarketing.textContent = 'Marketing';
  }
}

// Attach event listeners to each image
images.forEach((img) => {
  img.addEventListener('click', showText);
});

//Deepak's Code
// Preventing form submission if validation of inputs fail
document.getElementById('contactUs').onsubmit = function (event) {
  var fname = document.getElementById('fname').value;
  var email = document.getElementById('email').value;
  var details = document.getElementById('details').value;

  if (!fname || !email || !details) {
    alert('Please fill out all required fields in the form.');
    event.preventDefault();
  }
};
