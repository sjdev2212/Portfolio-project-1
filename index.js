const openBtn = document.querySelector('#open-menu-btn');
const closeBtn = document.querySelector('#close-menu-btn');
const menu = document.querySelector('.mobile-menu');
const listBtns = document.querySelectorAll('.listBtns');
const body = document.querySelector('body')
const seeMoreBtn = document.querySelector('#seeMoreBtn');

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
    const contentContainer = document.createElement('div');
    const header = document.createElement('h2');
    header.textContent = name;
    const closeBtn = document.createElement('a');
    closeBtn.textContent = 'x'
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

    wrapper.setAttribute('style', 'position:fixed; top:0; bottom: 0; left:0; right:0; display: flex; justify-content: center; align-items: center; background: rgba(0, 0, 0, 0.6); backdrop-filter: blur(8px);');
    contentContainer.setAttribute('style','width:90%; height: 90%; background:rgba(255, 255, 255, 0.3); padding: 10px; display:grid ; grid-template-columns: 1fr;grid-template-rows: auto 1fr 1fr auto auto auto;');
    image.style.width = "100%";
    image.style.height = '100%';

    body.appendChild(wrapper);
    wrapper.appendChild(contentContainer);
    contentContainer.appendChild(closeBtn);
    contentContainer.appendChild(header);
    contentContainer.appendChild(image);
    contentContainer.appendChild(paragraph);
    contentContainer.appendChild(tags);
    tags.appendChild(anchor1);
    tags.appendChild(anchor2);
    tags.appendChild(anchor3);
    contentContainer.appendChild(btnLive);
    contentContainer.appendChild(btnSrc);

    closeBtn.addEventListener('click', ()=> {
        wrapper.style.display = 'none';
    })

}

const project1 = new Project (
    'Prof art project', 
    "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting  ever since the 1500s, when an unknown printer took a galley of type veris lapoa todoe.", 
    'assets/images/easylo-colorlib-template.jpg.webp', 
    ['JS', 'Ruby', 'HTML'],
    'live',
    'source');

seeMoreBtn.addEventListener('click', ()=> creatPopUp(project1.name, project1.description, project1.img, project1.techs, project1.live, project1.source))

