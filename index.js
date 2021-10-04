const openBtn = document.querySelector('#open-menu-btn');
const closeBtn = document.querySelector('#close-menu-btn');
const menu = document.querySelector('.mobile-menu');

function createClass (elem, className) {
    elem.classList.add(className)
}

function removeClass (elem, className ) {
    elem.classList.remove(className)
} 

openBtn.addEventListener('click', () => {
    createClass(menu,'menu-open')
})
