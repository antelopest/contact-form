document.querySelector('.contact__form').addEventListener('submit', (e) => {
  e.preventDefault();

  /* Reset errors */
  document.querySelectorAll('.contact__form-error').forEach((error) => {
    error.textContent = '';
  });

  let isValid = true;

  const firstName = document.getElementById('firstName').value.trim();
  if (!firstName) {
    document.getElementById('first-name-error').textContent =
      'This field is required';
    isValid = false;
  }

  const lastName = document.getElementById('lastName').value.trim();
  if (!lastName) {
    document.getElementById('last-name-error').textContent =
      'This field is required';
    isValid = false;
  }

  const email = document.getElementById('email').value.trim();
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!email) {
    document.getElementById('email-error').textContent =
      'This field is required';
    isValid = false;
  } else if (!emailRegex.test(email)) {
    document.getElementById('email-error').textContent =
      'Please enter a valid email address';
    isValid = false;
  }

  const queryType = document.querySelector('input[name="queryType"]:checked');
  if (!queryType) {
    document.getElementById('query-type-error').textContent =
      'Please select a query type';
    isValid = false;
  }

  const message = document.getElementById('message').value.trim();
  if (!message) {
    document.getElementById('message-error').textContent =
      'This field is required';
    isValid = false;
  }

  const consent = document.getElementById('consent').checked;
  if (!consent) {
    document.getElementById('consent-error').textContent =
      'To submit this form, please consent to being contacted';
    isValid = false;
  }

  document.getElementById('successModal').style.display = 'flex';

  if (isValid) {
    let heading = 'Message Sent!';
    let message = "Thanks for completing the form. We'll be in touch soon!";
    alert('Form submitted!');
  }
});
