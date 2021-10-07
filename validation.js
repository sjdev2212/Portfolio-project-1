const email = document.getElementById('email');
const form = document.getElementById('form');
const error = document.getElementById('error');

form.addEventListener('submit', (x) => {
  const errorMessage = [];
  if (email.value !== email.value.toLowerCase()) {
    errorMessage.push('* E-mail should be in lowercase');
    x.preventDefault();
    error.innerText = errorMessage;
  }
});
