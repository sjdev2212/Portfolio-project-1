const sEmail = document.getElementById('email')
const user = document.getElementById('user');
const textArea = document.getElementById('user-comment');
const formStorage = document.querySelector('.store')

function storeUserData (e) {
    e.preventDefault();
    let user = {
        userName : user.value,
        userEmail : sEmail.value,
        userText : textArea.value
    }
    formStorage.submit();
    localStorage.setItem('user',JSON.stringify(user))

}
formStorage.addEventListener('submit' ,storeUserData);

