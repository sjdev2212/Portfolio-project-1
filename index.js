const openBtn = document.querySelector('#open-menu-btn');
const closeBtn = document.querySelector('#close-menu-btn');
const menu = document.querySelector('.mobile-menu');
const listBtns = document.querySelectorAll('.listBtns');
const body = document.querySelector('body')

function createClass(elem, className) {
    elem.classList.add(className)
}

function removeClass(elem, className) {
    elem.classList.remove(className)
}

openBtn.addEventListener('click', () => {
    createClass(menu, 'menu-open')
});

closeBtn.addEventListener('click', () => removeClass(menu, "menu-open"));

listBtns.forEach((button) => {
    button.addEventListener('click', () => removeClass(menu, "menu-open"))
});

function Project(name, description, img, techs, live, source) {
    this.name = name;
    this.description = description;
    this.img = img;
    this.techs = techs;
    this.live = live;
    this.source = source;

}

function creatPopUp(name, description, img, techs, live, source) {

    const wrapper = document.createElement('div');
    const header = document.createElement('h2');
    header.textContent = name;
    const image = document.createElement('img');
    image.src = img;
    const paragraph = document.createElement('p');
    paragraph.textContent = description;
    const tags = document.createElement('div');
    const anchor1 = document.createElement('a');
    const anchor2 = document.createElement('a');
    const anchor3 = document.createElement('a');
    anchor1.textContent = techs[0];
    anchor2.textContent = techs[1];
    anchor3.textContent = techs[2];
    anchor1.href = '#';
    anchor2.href = '#';
    anchor3.href = '#';
    const btnLive = document.createElement('button');
    const btnSrc = document.createElement('button');
    btnLive.textContent = live;
    btnSrc.textContent = source;

    wrapper.setAttribute('style', 'display:grid ; grid-template-columns: 1fr;grid-template-rows: auto 1fr 1fr auto auto auto; position:fixed;top: 10%; bottom: 10%;left:10%;right:10%;background: white; ')
    body.appendChild(wrapper);

}
