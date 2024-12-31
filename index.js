/* work data */

const mainWork = {
  id: 1,
  title: 'Full Performance',
  description: "Live performance with maximum professionalism and charisma.",
  image: './images/mainConcert.png',
};

const works = [{
  id: 1,
  title: 'Big Bands',
  description: 'Extensive experience as a saxophone player in big bands',
  image: './images/Junior1.png',
},
{
  id: 2,
  title: 'Duets and solos',
  description: 'Proven experience playing with duets or solo saxophone.',
  image: './images/Junior2.png',
},
{
  id: 3,
  title: 'Recording in studio',
  description: "Clean and professional recordings for studio music productions.",
  image: './images/Junior3.png',
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

mainWorkCard.classList = 'main-work-card';
mainWorkImg.classList = 'main-work-img';
mainWorkDivData.classList = 'main-work-div-data';
mainWorkDivTitle.classList = 'main-work-title';
mainWorkDivDesc.classList = 'main-work-desc';

workContiner.appendChild(mainWorkCard);
mainWorkCard.appendChild(mainWorkImg);
mainWorkCard.appendChild(mainWorkDivData);
mainWorkDivData.appendChild(mainWorkDivTitle);
mainWorkDivData.appendChild(mainWorkDivDesc);

mainWorkImg.setAttribute('src', `${mainWork.image}`);
document.querySelector('.main-work-title').textContent = mainWork.title;
document.querySelector('.main-work-desc').textContent = mainWork.description;


/* workcards */
const Deck = document.querySelector('.deck');
works.forEach((element) => {
  const liCard = document.createElement('li');
  const liWorkImg = document.createElement('img');
  const liWorkDivData = document.createElement('div');
  const liWorkDivTitle = document.createElement('h1');
  const liWorkDivDesc = document.createElement('p');

  liCard.classList = 'li-work-card';
  liWorkImg.classList = 'li-work-img';
  liWorkDivData.classList = 'li-work-div-data';
  liWorkDivTitle.classList = 'li-work-title';
  liWorkDivDesc.classList = 'li-work-desc';

  liWorkDivTitle.setAttribute('id', `t${element.id}`);
  liWorkDivDesc.setAttribute('id', `d${element.id}`);

  Deck.appendChild(liCard);
  liCard.appendChild(liWorkImg);
  liCard.appendChild(liWorkDivData);
  liWorkDivData.appendChild(liWorkDivTitle);
  liWorkDivData.appendChild(liWorkDivDesc);

  liWorkImg.setAttribute('src', `${element.image}`);
  document.getElementById(`t${element.id}`).textContent = element.title;
  document.getElementById(`d${element.id}`).textContent = element.description;
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
