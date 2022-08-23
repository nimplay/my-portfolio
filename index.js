/* work data */

const mainWork = {
  id: 1,
  title: 'webapp',
  description: "This project is a web application based on an external API 'tvmaze' that shows list of movies which can be liked and commented. We selected this API that provides data about Movies.",
  image: './images/webapp.png',
  tech: ['HTML', 'CSS', 'JS', 'API', 'WEBPACK'],
  repo: 'https://github.com/nimplay/api-webapp',
  live: 'https://nimplay.github.io/api-webapp/dist/',
};

const works = [{
  id: 1,
  title: 'Leaderboard',
  description: 'This is a Leaderboard project in microverse course. Which reproduces a list of maximum score for a game',
  image: './images/Leaderboard.png',
  tech: ['HTML', 'CSS', 'JS', 'API', 'WEBPACK'],
  repo: 'https://github.com/nimplay/leaderboard',
  live: 'https://nimplay.github.io/leaderboard/dist/',
},
{
  id: 2,
  title: 'Tetris',
  description: 'This project is a web Tetris game using HTML, CSS, Javascript.',
  image: './images/Tetris.png',
  tech: ['HTML', 'CSS', 'JS'],
  repo: 'https://github.com/nimplay/tetris',
  live: 'https://nimplay.github.io/tetris/',
},
{
  id: 3,
  title: 'Math Magicians',
  description: "This project is the Microverse's math_magicians project. Its a web application for use react that is a simple calculator.",
  image: './images/Calculator.png',
  tech: ['React', 'Webpack', 'JS', 'CSS'],
  repo: 'https://github.com/nimplay/math_magicians',
  live: 'https://spiffy-unicorn-297994.netlify.app/calculator',
},
{
  id: 4,
  title: 'ToDo List',
  description: 'This To Do List project in microverse course only for educational purposes.',
  image: './images/TodoList.png',
  tech: ['HTML', 'CSS', 'JS', 'WEBPACK'],
  repo: 'https://github.com/nimplay/to-do-list-code-partner',
  live: 'https://nimplay.github.io/do-list/dist/',
},
{
  id: 5,
  title: 'BookStore',
  description: 'This is a Bookstore project in microverse course for educational purposes and porfolio construction.',
  image: './images/BookStore.png',
  tech: ['HTML', 'CSS', 'JS', 'webpack', 'react', 'redux'],
  repo: 'https://github.com/nimplay/nimplay-react-bookstore',
  live: 'https://elaborate-kataifi-827aed.netlify.app/',
},
{
  id: 6,
  title: 'School Music',
  description: 'Application to learn to read music. Made using the Game Maker Studio engine available on Google Playstore',
  image: './images/SchoolMusic.png',
  tech: ['GML'],
  repo: 'https://play.google.com/store/apps/details?id=com.nimplay.School_music',
  live: '',
},
];

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
const repoBtn = document.createElement('button');
const liveBtn = document.createElement('button');

mainWorkCard.classList = 'main-work-card';
mainWorkImg.classList = 'main-work-img';
mainWorkDivData.classList = 'main-work-div-data';
mainWorkDivTitle.classList = 'main-work-title';
mainWorkDivDesc.classList = 'main-work-desc';
mainWorkDivTech.classList = 'main-work-tech';
mainWorkDivRepo.classList = 'main-work-repo';
repoBtn.classList = 'repo-btn';
liveBtn.classList = 'live-btn';

workContiner.appendChild(mainWorkCard);
mainWorkCard.appendChild(mainWorkImg);
mainWorkCard.appendChild(mainWorkDivData);
mainWorkDivData.appendChild(mainWorkDivTitle);
mainWorkDivData.appendChild(mainWorkDivDesc);
mainWorkDivData.appendChild(mainWorkDivTech);
mainWorkDivData.appendChild(mainWorkDivRepo);
mainWorkDivRepo.appendChild(repoBtn);
mainWorkDivRepo.appendChild(liveBtn);

mainWorkImg.setAttribute('src', `${mainWork.image}`);
document.querySelector('.main-work-title').textContent = mainWork.title;
document.querySelector('.main-work-desc').textContent = mainWork.description;
document.querySelector('.repo-btn').textContent = 'Repo';
document.querySelector('.live-btn').textContent = 'Live';

mainWork.tech.forEach((element) => {
  const techDiv = document.createElement('p');
  techDiv.classList = 'tech-p';
  techDiv.textContent = element;
  mainWorkDivTech.appendChild(techDiv);
});

/* workcards */
const Deck = document.querySelector('.deck');
works.forEach((element) => {
  const liCard = document.createElement('li');
  const liWorkImg = document.createElement('img');
  const liWorkDivData = document.createElement('div');
  const liWorkDivTitle = document.createElement('h1');
  const liWorkDivDesc = document.createElement('p');
  const liWorkDivTech = document.createElement('div');
  const liWorkDivRepo = document.createElement('div');
  const repoBtn = document.createElement('button');
  const liveBtn = document.createElement('button');
  liCard.classList = 'li-work-card';
  liWorkImg.classList = 'li-work-img';
  liWorkDivData.classList = 'li-work-div-data';
  liWorkDivTitle.classList = 'li-work-title';
  liWorkDivDesc.classList = 'li-work-desc';
  liWorkDivTech.classList = 'li-work-tech';
  liWorkDivRepo.classList = 'li-work-repo';
  repoBtn.classList = 'li-repo-btn';
  liveBtn.classList = 'li-live-btn';

  liWorkDivTitle.setAttribute('id', `t${element.id}`);
  liWorkDivDesc.setAttribute('id', `d${element.id}`);
  liveBtn.setAttribute('id', `l${element.id}`);
  repoBtn.setAttribute('id', `r${element.id}`);

  Deck.appendChild(liCard);
  liCard.appendChild(liWorkImg);
  liCard.appendChild(liWorkDivData);
  liWorkDivData.appendChild(liWorkDivTitle);
  liWorkDivData.appendChild(liWorkDivDesc);
  liWorkDivData.appendChild(liWorkDivTech);
  liWorkDivData.appendChild(liWorkDivRepo);
  liWorkDivRepo.appendChild(repoBtn);
  liWorkDivRepo.appendChild(liveBtn);

  liWorkImg.setAttribute('src', `${element.image}`);
  document.getElementById(`t${element.id}`).textContent = element.title;
  document.getElementById(`d${element.id}`).textContent = element.description;
  document.getElementById(`r${element.id}`).textContent = 'Repo';
  document.getElementById(`l${element.id}`).textContent = 'Live';

  element.tech.forEach((e) => {
    const techDiv = document.createElement('p');
    techDiv.classList = 'litech-p';
    techDiv.textContent = e;
    liWorkDivTech.appendChild(techDiv);
  });
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