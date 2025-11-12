/* DOWNLOAD CV BUTTON */

const cvButton = document.getElementById("cvButton");

  cvButton.addEventListener("click", () => {

    cvButton.classList.add("fade-out");

    setTimeout(() => {


      cvButton.innerHTML = "Baixado ✔";
      


      cvButton.classList.remove("fade-out");
      cvButton.classList.add("fade-in");


      setTimeout(() => {
        cvButton.classList.add("fade-out");

        setTimeout(() => {
          cvButton.innerHTML = `Baixe currículo <img src="assets/Arrow right.png" alt="">`;
          cvButton.classList.remove("fade-out");
          cvButton.classList.add("fade-in");
        }, 400);
      }, 3000);
    }, 400);
  });


  
  /* COPY EMAIL BUTTON */

  function copyEmail() {
    let email = document.getElementById("email").textContent;
    navigator.clipboard.writeText(email)

    let emailCopied = document.getElementById("copied");
    emailCopied.classList.add("show");
    
    setTimeout(() => emailCopied.classList.remove("show"), 2000);
  }

  function copyEmail2() {
    let email = document.getElementById("emailFoot").textContent;
    navigator.clipboard.writeText(email)

    let emailCopied = document.getElementById("copied");
    emailCopied.classList.add("show");
    emailCopied.textContent = "E-mail copiado!";
    setTimeout(() => emailCopied.classList.remove("show"), 2000);
  }

  /* TECH IMAGE CAROUSEL */
  
  const skills = [
    { img: "assets/html.png", name: "HTML5" },
    { img: "assets/css.png", name: "CSS3" },
    { img: "assets/js.png", name: "JavaScript" },
    { img: "assets/cSharp.png", name: "C#" },
    { img: "assets/mySql.png", name: "SQL" },
  ];
  let start = 0; // índice inicial
  const grid = document.getElementById("techSkillsGrid");
  function renderSkills() {
    grid.innerHTML = "";
    for (let i = 0; i < 3; i++) {
      const index = (start + i) % skills.length;
      const skill = skills[index];
      const div = document.createElement("div");
      div.id = "imgHover";
      div.innerHTML = `
        <img src="${skill.img}" alt="${skill.name}">
        <p class="josefin-slab">${skill.name}</p>
      `;
      grid.appendChild(div);
    }
  }
  document.getElementById("prev").addEventListener("click", () => {
    start = (start - 1 + skills.length) % skills.length;
    renderSkills();
  });
  document.getElementById("next").addEventListener("click", () => {
    start = (start + 1) % skills.length;
    renderSkills();
  });
  // Inicializa
  renderSkills();

  /* GENERAL IMAGE CAROUSEL */
  
  const generalSkills = [
    { img: "assets/english.png", name: "Proficiência em Inglês" },
    { img: "assets/adaptability.png", name: "Adaptabilidade" },
    { img: "assets/communication.png", name: "Comunicação" },
    { img: "assets/fastTyping.png", name: "Rápida Digitação" },
    { img: "assets/flexibility.png", name: "Flexibilidade" },
  ];
  
  let startGeneral = 0;
  const generalGrid = document.getElementById("generalSkillsGrid");
  
  function renderGeneralSkills() {
    generalGrid.classList.remove("fade-in");
    generalGrid.classList.add("fade-out");
  
    setTimeout(() => {
      generalGrid.innerHTML = "";
      for (let i = 0; i < 3; i++) {
        const index = (startGeneral + i) % generalSkills.length;
        const skill = generalSkills[index];
  
        const div = document.createElement("div");
        div.id = "imgHover";
        div.innerHTML = `
          <img src="${skill.img}" alt="${skill.name}">
          <p class="josefin-slab">${skill.name}</p>
        `;
        generalGrid.appendChild(div);
      }
  
      generalGrid.classList.remove("fade-out");
      generalGrid.classList.add("fade-in");
    }, 200);
  }
  
  document.getElementById("prevGeneral").addEventListener("click", () => {
    startGeneral = (startGeneral - 1 + generalSkills.length) % generalSkills.length;
    renderGeneralSkills();
  });
  
  document.getElementById("nextGeneral").addEventListener("click", () => {
    startGeneral = (startGeneral + 1) % generalSkills.length;
    renderGeneralSkills();
  });
  
  renderGeneralSkills();

/* FADE IMAGE CAROUSEL */

  function renderSkills() {
 
    grid.classList.remove("fade-in");
    grid.classList.add("fade-out");
  
    setTimeout(() => {
    // Troca o conteúdo
      grid.innerHTML = "";
      for (let i = 0; i < 3; i++) {
        const index = (start + i) % skills.length;
        const skill = skills[index];
  
        const div = document.createElement("div");
        div.id = "imgHover";
        div.innerHTML = 
        `
          <img src="${skill.img}" alt="${skill.name}">
          <p class="josefin-slab">${skill.name}</p>
        `
        ;
        grid.appendChild(div);
      }
  
      
      grid.classList.remove("fade-out");
      grid.classList.add("fade-in");
    }, 200);
  }

  /* MENU ASIDE PHONE */

  const checkbox = document.getElementById("checkbox");
const menuLinks = document.querySelectorAll("#menuAsidePhone a");

menuLinks.forEach(link => {
  link.addEventListener("click", () => {
    checkbox.checked = false; // Fecha o menu
  });
});

  /* PROJECT BUTTON*/
// Seleciona os elementos necessários
const projectFlex = document.getElementById('projectFlex');
const projectNextBtn = document.getElementById('projectNextBtn');
const projectPreviousBtn = document.getElementById('projectPreviousBtn');
// Índice atual do projeto sendo exibido (começa em 0)
let currentIndex = 0;
// Número total de projetos
const totalProjects = 4;
// Função para atualizar a posição do slider
function updateSlider() {
    // Move o container horizontalmente baseado no índice
    const translateX = -currentIndex * 100; // Cada projeto ocupa 100% da largura
    projectFlex.style.transform = `translateX(${translateX}%)`;
}
// Event listener para o botão "Próximo"
projectNextBtn.addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % totalProjects; // Vai para o próximo, ou volta ao primeiro se for o último
    updateSlider();
});
// Event listener para o botão "Anterior"
projectPreviousBtn.addEventListener('click', () => {
    currentIndex = (currentIndex - 1 + totalProjects) % totalProjects; // Vai para o anterior, ou para o último se for o primeiro
    updateSlider();
});
// Inicializa o slider na posição inicial
updateSlider();

  

/* DARK MODE */

const check = document.querySelector("#check");

function darkMode() {
    const darkelement = document.body;

    if (check.checked) {
        darkelement.classList.add("dark-mode");
        localStorage.setItem("dark-mode", "true");
    } else {
        darkelement.classList.remove("dark-mode");
        localStorage.setItem("dark-mode", "false");
    }
}


addEventListener("DOMContentLoaded", () => {
  const darkModeStatus = localStorage.getItem("dark-mode");
  
  if (darkModeStatus === "true") {
      check.checked = true;
  } else {
      check.checked = false;
  }
  
  darkMode();
});



/* LOCAL STORAGE DARK MODE */