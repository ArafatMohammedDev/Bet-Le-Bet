const signupForm = document.getElementById('signup-form');

signupForm.addEventListener('submit', (event) => {
  event.preventDefault(); // Prevent default form submission

  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;

  // Basic validation
  let isValid = true;
  if (!/^\S+@\S+\.\S+$/.test(email)) {
    alert('Please enter a valid email address!');
    isValid = false;
  }
  if (password === '') {
    alert('Please enter a password!');
    isValid = false;
  } else if (password.length < 8) { // Minimum password length check
    alert('Password must be at least 8 characters long!');
    isValid = false;
  }

  if (isValid) {
    // Simulate successful sign-up (no actual data processing)
    window.location.href = "body.html"; // Replace "/folder" with the actual folder path
    // Optionally, you can open the confirmation page here using window.open()
    // window.open("confirmation.html", "_blank"); 
  }
});
