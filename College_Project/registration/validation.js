// Experiment 6-7: validate the registration form before submission.
function validateRegistration(event) {
  event.preventDefault();

  // Collect values from the form controls.
  const form = event.target;
  const message = document.getElementById('formMessage');
  const name = form.name.value.trim();
  const password = form.password.value;
  const email = form.email.value.trim();
  const phone = form.phone.value.trim();

  // Name: alphabets/spaces only and at least six characters.
  if (!/^[A-Za-z ]{6,}$/.test(name)) {
    message.textContent = 'Name must contain only alphabets and be at least 6 characters.';
    return false;
  }

  // Password: minimum length requirement.
  if (password.length < 6) {
    message.textContent = 'Password must be at least 6 characters long.';
    return false;
  }

  // Email: basic name@domain.extension pattern.
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    message.textContent = 'Enter a valid email in name@domain.com format.';
    return false;
  }

  // Phone: exactly ten numeric digits.
  if (!/^\d{10}$/.test(phone)) {
    message.textContent = 'Phone number must contain exactly 10 digits.';
    return false;
  }

  message.textContent = 'Registration submitted successfully.';
  message.style.color = '#15803d';
  return false;
}
