const openBtn = document.querySelector("#open-menu-btn");
const closeBtn = document.querySelector("#close-menu-btn");
const menu = document.querySelector(".mobile-menu");
const listBtns = document.querySelectorAll(".listBtns");
const body = document.querySelector("body");
const seeMoreBtn = document.querySelector("#seeMoreBtn");

function creatPopUp(
  name,
  description,
  img,
  techs,
  live = "SeeLive",
  source = "SeeSource"
) {
  const wrapper = document.createElement("div");
  const contentContainer = document.createElement("div");
  const headerContainer = document.createElement("div");
  const header = document.createElement("h2");
  header.textContent = name;
  const closeBtn = document.createElement("a");
  closeBtn.textContent = "x";
  const image = document.createElement("img");
  image.src = img;
  const paragraph = document.createElement("p");
  paragraph.textContent = description;
  const tags = document.createElement("div");
  const anchor1 = document.createElement("a");
  const anchor2 = document.createElement("a");
  const anchor3 = document.createElement("a");
  anchor1.textContent = techs[0];
  anchor2.textContent = techs[1];
  anchor3.textContent = techs[2];
  anchor1.href = "#";
  anchor2.href = "#";
  anchor3.href = "#";
  const btnLive = document.createElement("button");
  const btnSrc = document.createElement("button");
  btnLive.textContent = live;
  btnSrc.textContent = source;

  wrapper.setAttribute(
    "style",
    "position:fixed; top:0; bottom: 0; left:0; right:0; display: flex; justify-content: center; align-items: center; background: rgba(0, 0, 0, 0.8); backdrop-filter: blur(8px);"
  );
  contentContainer.setAttribute(
    "style",
    "width:80%; height: 80%; border: 1px solid #fff; background:rgba(255, 255, 255, 0.3); padding: 10px; display:grid ; grid-template-columns: 1fr;grid-template-rows: auto 1fr 1fr auto auto auto; gird-gap: 20px; overflow: auto;"
  );
  headerContainer.setAttribute(
    "style",
    "display: flex;justify-content: space-between;align-items: center;padding: 25px 0;"
  );
  header.setAttribute("style", "padding: 0 ; margin: 0;");
  paragraph.setAttribute("style", "font-size:16px; text-align:center;");
  tags.setAttribute("style", "display:flex; justify-content: center;");
  anchor1.setAttribute(
    "style",
    "padding: 10px; color:white; text-decoration:none; border-left: 1px solid #fff;"
  );
  anchor2.setAttribute(
    "style",
    "padding: 10px; color:white; text-decoration:none; border-left: 1px solid #fff;"
  );
  anchor3.setAttribute(
    "style",
    "padding: 10px; color:white; text-decoration:none; border-left: 1px solid #fff;  border-right: 1px solid #fff;"
  );
  closeBtn.style.color = "#fff";
  closeBtn.style.fontSize = "20px";
  btnLive.setAttribute(
    "style",
    "padding: 12px; background: #7D73FC url(assets/images/popup-icons/Export.svg) 90% 50% no-repeat; padding-right: 40px; justify-self: center; color: #fff; border: none; margin-top: 20px"
  );
  btnSrc.setAttribute(
    "style",
    "padding: 12px; background: #7D73FC url(assets/images/popup-icons/GitHub.svg) 90% 50% no-repeat; padding-right: 40px; justify-self: center; color: #fff; border: none; margin-top: 20px"
  );
  image.setAttribute(
    "style",
    "justify-self: center max-width: 700px; width: 100%"
  );

  body.appendChild(wrapper);
  wrapper.appendChild(contentContainer);
  contentContainer.appendChild(headerContainer);
  headerContainer.appendChild(header);
  headerContainer.appendChild(closeBtn);
  contentContainer.appendChild(image);
  contentContainer.appendChild(paragraph);
  contentContainer.appendChild(tags);
  tags.appendChild(anchor1);
  tags.appendChild(anchor2);
  tags.appendChild(anchor3);
  contentContainer.appendChild(btnLive);
  contentContainer.appendChild(btnSrc);

  closeBtn.addEventListener("click", () => {
    wrapper.style.display = "none";
  });
}

const projectList = [
  {
    name: "Multi-Post Stories",
    image: "assets/images/easylo-colorlib-template.jpg.webp",
    description:
      "A daily selection of privately personalized reads; no accounts o sign-ups required. has been the industrys standard dummy text eversince the 1500s, when an unknown printer took a standard dummy text.",
    techs: ["Html", "Bootstrap", "Ruby"],
    button: "See the Project",
  },
  {
    name: "Multi-Post Stories",
    image: "assets/images/port-3.png",
    description:
      "A daily selection of privately personalized reads; no accounts o sign-ups required. has been the industrys standard dummy text eversince the 1500s, when an unknown printer took a standard dummy text.",
    techs: ["Html", "Bootstrap", "Ruby"],
    button: "See the Project",
  },
  {
    name: "Multi-Post Stories",
    image: "assets/images/foto--2webp.webp",
    description:
      "A daily selection of privately personalized reads; no accounts o sign-ups required. has been the industrys standard dummy text eversince the 1500s, when an unknown printer took a standard dummy text.",
    techs: ["Html", "Bootstrap", "Ruby"],
    button: "See the Project",
  },
  {
    name: "Multi-Post Stories",
    image: "assets/images/snap-4.png",
    description:
      "A daily selection of privately personalized reads; no accounts o sign-ups required. has been the industrys standard dummy text eversince the 1500s, when an unknown printer took a standard dummy text.",
    techs: ["Html", "Bootstrap", "Ruby"],
    button: "See the Project",
  },
];
const workSection = document.getElementById("profile");
const deskWorkSection = document.querySelector(".big-version");
const deskWorkSection1 = document.getElementById("big-version");
const deskWorkSection2 = document.getElementById("big-version2");
const deskWorkSection3 = document.getElementById("big-version3");

for (let i = 0; i < projectList.length; i++) {
  workSection.innerHTML += `<div class="card">
<img class="card-image" src=${projectList[i].image}>
<h1 class="card-title">${projectList[i].name}</h1>
<p class="description">${projectList[i].description}</p>
<ul class="card-list">
<li>${projectList[i].techs[0]}</li>
<li>${projectList[i].techs[1]}</li>
<li>${projectList[i].techs[2]}</li>
</ul>
<button class="card-btn"
        id = ${i}
        type="button">
        ${projectList[i].button}
</button>
</div> `;
}

deskWorkSection.innerHTML = `<div class="card">
    
<div >
<img class="card-image" src=${projectList[0].image}>
</div>
<div class="card-content>
<h1 class="card-title">${projectList[0].name}</h1>
<p class="description">${projectList[0].description}</p>
<ul class="card-list">
<li>${projectList[0].techs[0]}</li>
<li>${projectList[0].techs[1]}</li>
<li>${projectList[0].techs[2]}</li>
</ul>
<button 
class="card-btn"
id = "d${0}"
type="button">
${projectList[0].button}
</button>
</div>
</div> `;

deskWorkSection1.innerHTML = `<div class="card">
    
    
    
   
   <div class="card-content card-left">
    <h1 class="card-title">${projectList[1].name}</h1>
    <p class="description">${projectList[1].description}</p>
    <ul class="card-list">
    <li>${projectList[1].techs[0]}</li>
    <li>${projectList[1].techs[1]}</li>
    <li>${projectList[1].techs[2]}</li>
    </ul>
    <button 
    class="card-btn"
    id = "d${1}"
    type="button">
    ${projectList[1].button}
</button>
</div>
<div >
<img class="card-image" src=${projectList[1].image}>
</div>
</div> `;

deskWorkSection2.innerHTML = `<div class="card">
    <div >
    <img class="card-image" src=${projectList[2].image}>
   </div>
    
    <div class="card-content>
    <h1 class="card-title">${projectList[2].name}</h1>
    <p class="description">${projectList[1].description}</p>
    <ul class="card-list">
    <li>${projectList[2].techs[0]}</li>
    <li>${projectList[2].techs[1]}</li>
    <li>${projectList[2].techs[2]}</li>
    </ul>
    <button 
    class="card-btn"
    id = "d${2}"
    type="button">
    ${projectList[2].button}
</button>
</div>

    </div> `;
deskWorkSection3.innerHTML = `<div class="card">
    
    
    
   
    <div class="card-content card-left">
     <h1 class="card-title">${projectList[1].name}</h1>
     <p class="description">${projectList[1].description}</p>
     <ul class="card-list">
     <li>${projectList[1].techs[0]}</li>
     <li>${projectList[1].techs[1]}</li>
     <li>${projectList[1].techs[2]}</li>
     </ul>
     <button 
     class="card-btn"
     id = "d${3}"
     type="button">
     ${projectList[3].button}
 </button>
 </div>
 <div >
 <img class="card-image" src=${projectList[3].image}>
 </div>
 </div> `;

const seeMoreBtn0 = document.getElementById("0");
const seeMoreBtn1 = document.getElementById("1");
const seeMoreBtn2 = document.getElementById("2");
const seeMoreBtn3 = document.getElementById("3");

const seeMoreBtnd0 = document.getElementById("d0");
const seeMoreBtnd1 = document.getElementById("d1");
const seeMoreBtnd2 = document.getElementById("d2");
const seeMoreBtnd3 = document.getElementById("d3");

seeMoreBtn0.addEventListener("click", () =>
  creatPopUp(
    projectList[0].name,
    projectList[0].description,
    projectList[0].image,
    projectList[0].techs
  )
);
seeMoreBtnd0.addEventListener("click", () =>
  creatPopUp(
    projectList[0].name,
    projectList[0].description,
    projectList[0].image,
    projectList[0].techs
  )
);
seeMoreBtnd1.addEventListener("click", () =>
  creatPopUp(
    projectList[1].name,
    projectList[1].description,
    projectList[1].image,
    projectList[1].techs
  )
);
seeMoreBtnd2.addEventListener("click", () =>
  creatPopUp(
    projectList[2].name,
    projectList[2].description,
    projectList[2].image,
    projectList[2].techs
  )
);
seeMoreBtnd3.addEventListener("click", () =>
  creatPopUp(
    projectList[3].name,
    projectList[3].description,
    projectList[3].image,
    projectList[3].techs
  )
);

seeMoreBtn1.addEventListener("click", () =>
  creatPopUp(
    projectList[1].name,
    projectList[1].description,
    projectList[1].image,
    projectList[1].techs
  )
);

seeMoreBtn2.addEventListener("click", () =>
  creatPopUp(
    projectList[2].name,
    projectList[2].description,
    projectList[2].image,
    projectList[2].techs
  )
);

seeMoreBtn3.addEventListener("click", () =>
  creatPopUp(
    projectList[3].name,
    projectList[3].description,
    projectList[3].image,
    projectList[3].techs
  )
);

function createClass(elem, className) {
  elem.classList.add(className);
}

function removeClass(elem, className) {
  elem.classList.remove(className);
}

openBtn.addEventListener("click", () => {
  createClass(menu, "menu-open");
});

closeBtn.addEventListener("click", () => removeClass(menu, "menu-open"));

listBtns.forEach((button) => {
  button.addEventListener("click", () => removeClass(menu, "menu-open"));
});
