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
  if (!email) {
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
  if (isValid) {
    alert('Form submitted!');
  }
});
