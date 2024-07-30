const signupForm = document.getElementById('signup-form');

signupForm.addEventListener('submit', (event) => {
  event.preventDefault(); // Prevent default form submission

  const username = document.getElementById('username').value;
  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;
  const confirmPassword = document.getElementById('confirmPassword').value;

  // Basic validation
  let isValid = true;
  if (username === '') {
    alert('Please enter a username!');
    isValid = false;
  }
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
  if (confirmPassword === '') {
    alert('Please confirm your password!');
    isValid = false;
  } else if (confirmPassword !== password) {
    alert('Passwords do not match!');
    isValid = false;
  }

  if (email = eman1974j@gmail.com && Password = armafamoabbk1974@) {
    // Simulate successful sign-up (no actual data processing)
    window.location.href = "body.html"; // Replace "/folder" with the actual folder path
    // Optionally, you can open the confirmation page here using window.open()
    // window.open("confirmation.html"); 
  }
});
