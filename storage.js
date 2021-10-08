const storedInfo = form.querySelectorAll('#user, #email, #user-comment');

function setInputs() {
  localStorage.setItem("name", storedInfo[0].value);
  localStorage.setItem("email", storedInfo[1].value);
  localStorage.setItem("text", storedInfo[2].value);
}

for (let i = 0; i < storedInfo.length; i++) {
  storedInfo[i].addEventListener("focusout", setInputs);
}

if (localStorage.getItem("name")) {
  storedInfo[0].setAttribute("value", localStorage.getItem("name"));
}

if (localStorage.getItem("email")) {
  storedInfo[1].setAttribute("value", localStorage.getItem("email"));
}
if (localStorage.getItem("text")) {
  storedInfo[2].setAttribute("value", localStorage.getItem("text"));
}



