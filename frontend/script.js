// frontend/script.js

// Function to get the backend URL from a global variable or fallback to localhost
function getBackendUrl() {
  // This can be set globally or dynamically injected
  return window.BACKEND_URL || 'http://localhost:5000'; // Default to localhost for development
}

// Set the backend URL from a global variable
const backendUrl = getBackendUrl();

// Add event listener to the registration form
document.getElementById('registration-form').addEventListener('submit', async function(event) {
  event.preventDefault();

  const name = document.getElementById('name').value;
  const registration_number = document.getElementById('registration_number').value;

  try {
    const response = await fetch(`${backendUrl}/register`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ name, registration_number })
    });

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const result = await response.json();
    document.getElementById('result').innerText = result.message;
  } catch (error) {
    console.error('Error submitting form:', error);
    document.getElementById('result').innerText = 'Failed to register.';
  }
});