const email = document.getElementById('email');
const validateBtn = document.getElementById('validate-btn');

function checkValidation(element, message) {
  let letters = element.value;
  for (let i = 0; i < letters.length; i += 1) {
    if (element[i] === element[i].toUpperCase()) {
      message.textContent = "Email should be in lowercase";
      message.style.display = "block";
    } else {
      message.style.display = "none";
    }
  }
}
