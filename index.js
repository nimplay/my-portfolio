/* work data */

const works = {
  id: 1,
  title: 'webapp',
  description: "This project is a web application based on an external API 'tvmaze' that shows list of movies which can be liked and commented. We selected this API that provides data about Movies.",
  image: './images/webapp.png',
  tech: ['HTML', 'CSS', 'JS', 'API', 'WEBPACK'],
  repo: '',
  live: '',
};

/*  top menu  */
const list = document.querySelector('#menu');
const numLi = list.getElementsByTagName('li');
const id = [];
for (let i = 0; i < numLi.length; i += 1) {
  if (numLi[i].parentNode === list) {
    id.push(i);
  }
}
id.forEach((e) => {
  const menuli = document.getElementById(e);
  menuli.addEventListener('mouseenter', () => {
    document.getElementById(`i${e}`).classList.toggle('active');
    document.getElementById(`m${e}`).classList.toggle('active');
  });
  menuli.addEventListener('mouseleave', () => {
    document.getElementById(`i${e}`).classList.remove('active');
    document.getElementById(`m${e}`).classList.remove('active');
  });
});

/*  social menu  */
const socialDiv = document.querySelector('#social-section');
const numA = socialDiv.getElementsByTagName('a');
const id2 = [];
for (let i = 0; i < numA.length; i += 1) {
  if (numA[i].parentNode === socialDiv) {
    id2.push(numA[i].getAttribute('id'));
  }
}
id2.forEach((e) => {
  const socialIcon = document.getElementById(e);
  socialIcon.addEventListener('mouseenter', () => {
    document.getElementById(`i${e}`).classList.toggle('active');
    document.getElementById(`p${e}`).classList.toggle('active');
  });
  socialIcon.addEventListener('mouseleave', () => {
    document.getElementById(`i${e}`).classList.remove('active');
    document.getElementById(`p${e}`).classList.remove('active');
  });
});

/** work cards */

const workContiner = document.querySelector('.work');
const mainWorkCard = document.createElement('div');
const mainWorkImg = document.createElement('img');
const mainWorkDivData = document.createElement('div');
const mainWorkDivTitle = document.createElement('h1');
const mainWorkDivDesc = document.createElement('p');
const mainWorkDivTech = document.createElement('div');
const mainWorkDivRepo = document.createElement('div');

mainWorkCard.classList = 'main-work-card';
mainWorkImg.classList = 'main-work-img';
mainWorkDivData.classList = 'main-work-div-data';
mainWorkDivTitle.classList = 'main-work-title';
mainWorkDivDesc.classList = 'main-work-desc';
mainWorkDivTech.classList = 'main-work-tech';

workContiner.appendChild(mainWorkCard);
mainWorkCard.appendChild(mainWorkImg);
mainWorkCard.appendChild(mainWorkDivData);
mainWorkDivData.appendChild(mainWorkDivTitle);
mainWorkDivData.appendChild(mainWorkDivDesc);
mainWorkDivData.appendChild(mainWorkDivTech);
mainWorkDivData.appendChild(mainWorkDivRepo);

mainWorkImg.setAttribute('src', `${works.image}`);
document.querySelector('.main-work-title').textContent = works.title;
document.querySelector('.main-work-desc').textContent = works.description;

works.tech.forEach((element) => {
  const techDiv = document.createElement('p');
  techDiv.classList = 'tech-p';
  techDiv.textContent = element;
  mainWorkDivTech.appendChild(techDiv);
});

/* contact form */

const form = document.getElementById('form');
const name = document.getElementById('f-name');
const email = document.getElementById('f-mail');

function setErrorFor(input, message) {
  const formControl = input.parentElement;
  const small = formControl.querySelector('small');
  small.innerText = message;
  formControl.className = 'form-textbox error';
}

function setSuccessFor(input) {
  const formControl = input.parentElement;
  formControl.className = 'form-textbox success';
}

function isEmail(email) {
  return /^[a-z0-9.!#$%&'*+=?^_`{|}~-]+@[a-z0-9](?:[a-zA-Z0-9-]{0,61}[a-z0-9])?(?:\.[a-z0-9](?:[a-z0-9-]{0,61}[a-z0-9])?)*$/.test(email);
}

function checkImputs() {
  const usernameValue = name.value.trim();
  const usermailValue = email.value.trim();

  if (usernameValue === '') {
    setErrorFor(name, 'Full name cannot be in blank');
  } else {
    setSuccessFor(name);
  }
  if (usermailValue === '') {
    setErrorFor(email, 'Email address cannot be in blank');
  } else if (!isEmail(usermailValue)) {
    setErrorFor(email, 'Email address is not valid');
  } else {
    setSuccessFor(email);
  }
}
form.addEventListener('submit', (e) => {
  e.preventDefault();
  checkImputs();
});