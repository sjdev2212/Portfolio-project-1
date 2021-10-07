const email = document.getElementById('email');
const validateBtn = document.getElementById('validation-btn');
const alertMessage = document.querySelector('#alertMessage');


function checkValidation(element, message) {
   let letters = element.split("");
   for (let i = 0; i < letters.length; i += 1) {
     if (letters[i] === letters[i].toUpperCase()) 
       {message.textContent = "Email should be in lowercase";
       message.style.display = "block";
     } else {
       message.style.display = "none";
     }
  }
 };

// validateBtn.addEventListener('click', ()=> checkValidation(email, alertMessage));
