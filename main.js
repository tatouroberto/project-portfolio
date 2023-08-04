const MenuSection = document.getElementById('Menu');

const showMenu = () => {
  MenuSection.style.display = 'block';
};
const hideMenu = () => {
  MenuSection.style.display = 'none';
};

const cardInfo = [
  {
    project: '0',
    name: 'Tonic',
    role1: ['CANOPY', 'Back End Dev', '2015'],
    role2: ['FACEBOOK', 'Full stack dev', '2015'],
    description1: 'A daily selection of privately personalized reads; no accounts or sign-ups required.',
    description2: 'A daily selection of privately personalized reads; no accounts or sign-ups required.',
    description3: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s. Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
    description4: 'Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum han printer took a galley of type and scrambled it 1960s with the releawn printer took a galley of type and scrambled it 1960s.',
    techskills: ['HTML', 'Ruby on rails', 'CSS', 'JavaScript', 'Ruby', 'Boostrap'],
    image1: 'src="img/Snapshoot1-desk.png"',
    image2: 'src="img/Snapshoot-Portfolio.png"',
    liveButton: '#',
    sourceButton: '#',
  },
  {
    project: '1',
    name: 'Multi-Post Stories',
    role1: ['CANOPY', 'Back End Dev', '2015'],
    role2: ['FACEBOOK', 'Full stack dev', '2015'],
    description1: 'A daily selection of privately personalized reads; no accounts or sign-ups required.',
    description2: 'A daily selection of privately personalized reads; no accounts or sign-ups required.',
    description3: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s. Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
    description4: 'Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum han printer took a galley of type and scrambled it 1960s with the releawn printer took a galley of type and scrambled it 1960s.',
    techskills: ['HTML', 'Ruby on rails', 'CSS', 'JavaScript', 'Ruby', 'Boostrap'],
    image1: 'src="img/Snapshoot-desk2.png"',
    image2: 'src="img/Snapshoot1.png"',
    liveButton: '#',
    sourceButton: '#',
  },
  {
    project: '2',
    name: 'Facebook 360',
    role1: ['CANOPY', 'Back End Dev', '2015'],
    role2: ['FACEBOOK', 'Full stack dev', '2015'],
    description1: 'A daily selection of privately personalized reads; no accounts or sign-ups required.',
    description2: 'A daily selection of privately personalized reads; no accounts or sign-ups required.',
    description3: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s. Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
    description4: 'Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum han printer took a galley of type and scrambled it 1960s with the releawn printer took a galley of type and scrambled it 1960s.',
    techskills: ['HTML', 'Ruby on rails', 'CSS', 'JavaScript', 'Ruby', 'Boostrap'],
    image1: 'src="img/Snapshoot-desk3.png"',
    image2: 'src="img/Snapshoot2.png"',
    liveButton: '#',
    sourceButton: '#',
  },
  {
    project: '3',
    name: 'Uber Navigation',
    role1: ['CANOPY', 'Back End Dev', '2015'],
    role2: ['FACEBOOK', 'Full stack dev', '2015'],
    description1: 'A daily selection of privately personalized reads; no accounts or sign-ups required.',
    description2: 'A daily selection of privately personalized reads; no accounts or sign-ups required.',
    description3: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s. Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
    description4: 'Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum han printer took a galley of type and scrambled it 1960s with the releawn printer took a galley of type and scrambled it 1960s.',
    techskills: ['HTML', 'Ruby on rails', 'CSS', 'JavaScript', 'Ruby', 'Boostrap'],
    image1: 'src="img/Snapshoot-desk4.png"',
    image2: 'src="img/Snapshoot3.png"',
    liveButton: '#',
    sourceButton: '#',
  },
];

const mainWrapper = document.querySelector('.main_wrapper');

function populatCard(index) {
  mainWrapper.innerHTML += `
  <div class="card">
    <img ${cardInfo[index].image1} alt="a_screentshot" class="desk-card-image"></img>
    <img ${cardInfo[index].image2} alt="a_screentshot" class="pic"></img>
    <div class="text-card">
    <h3>${cardInfo[index].name}</h3>
    <ul class="canopy">
          <li class="cano"><a href="#" class="can">${cardInfo[index].role1[0]}</a></li>
          <li><a href="#" class="canop ">${cardInfo[index].role1[1]}</a></li>
          <li><a href="#" class="canop">${cardInfo[index].role1[2]}</a></li>
        </ul>
        <ul class="facebook">
          <li class="cano"><a href="#" class="can">${cardInfo[index].role2[0]}</a></li>
          <li><a href="#" class="canop STACK">${cardInfo[index].role2[1]}</a></li>
          <li><a href="#" class="canop">${cardInfo[index].role2[2]}</a></li>
        </ul>
        <p class="text">
          ${cardInfo[index].description1}
    </p>
    <p class="text-desk">
     ${cardInfo[index].description2}
    </p>
       <ul class="ul-tag">
       <li class="tag">
           <a href="" class="tag-in">${cardInfo[index].techskills[0]}</a>
       </li>
       <li class="tag ruby">
         <a href="" class="tag-in">${cardInfo[index].techskills[1]}</a>
     </li>
       <li class="tag">
           <a href="" class="tag-in" >${cardInfo[index].techskills[2]}</a>
       </li>
       <li class="tag">
           <a href="" class="tag-in">${cardInfo[index].techskills[3]}</a>
       </li>
   </ul>
   <div class="button__holder"><a href="#" class="button project facebook-but" id="${index}">See Project</a></div>
    </div>
  </div>`;
}

for (let index = 0; index < cardInfo.length; index += 1) {
  populatCard(index);
}

let popContainer = document.querySelector('.pop-wrapper');
const buttonPressed = document.querySelectorAll('.project');
buttonPressed.forEach((index) => {
  index.addEventListener('click', () => {
    const buttonId = index.id;
    const selectedCard = cardInfo[buttonId];
    popContainer.classList.add('pop-container');
    popContainer.innerHTML += `
      <div class="popUP">
      <div class="card-pop">
          <div class="text-card-pop">
            <div>
              <button onclick="closePop()" >
                <a href=""><img src="img/cross-pop.png" alt=""></a>
              </button>
              <h3>${selectedCard.name}</h3>
            </div>
            <ul class="canopy">
              <li class="cano"><a href="#" class="can">${selectedCard.role1[0]}</a></li>
              <li><a href="#" class="canop ">${selectedCard.role1[1]}</a></li>
              <li><a href="#" class="canop">${selectedCard.role1[2]}</a></li>
            </ul>
          <ul class="facebook">
            <li class="cano"><a href="#" class="can">${selectedCard.role2[0]}</a></li>
            <li><a href="#" class="canop STACK">${selectedCard.role2[1]}</a></li>
            <li><a href="#" class="canop">${selectedCard.role2[2]}</a></li>
          </ul>
        <img ${selectedCard.image1} alt="a_screentshot" class="desk-card-image desk-card-image-pop">
        <img ${selectedCard.image2} alt="a_screentshot" class="pic">
      </div>
        <div class="pop-content">
          <div class="pop-text">
            <p class="text-pop">
            ${selectedCard.description1}
          </p>
          <p class="text-desk-pop">
          ${selectedCard.description3}
        </p>
        <br>
        <p class="text-desk-pop">
        ${selectedCard.description4}
      </p>
          </div>
          <div class="pop-tag">
          <ul class="ul-tag-pop">
              <li class="tag">
                  <a href="" class="tag-in">${selectedCard.techskills[0]}</a>
              </li>
              <li class="tag">
                  <a href="" class="tag-in" >${selectedCard.techskills[2]}</a>
              </li>
              <li class="tag">
                  <a href="" class="tag-in">${selectedCard.techskills[3]}</a>
              </li>
          </ul>
          <ul class="ul-tag-pop">
          <li class="tag ruby">
           <a href="" class="tag-in ">${selectedCard.techskills[4]}</a>
          </li>
          <li class="tag ruby">
          <a href="" class="tag-in ">${selectedCard.techskills[5]}</a>
         </li>
      </ul>
        <div class="pop-button">
          <div class="button__holder-pop"><a href="#" class="button project button-pop">See live <img src="img/button-image1.png" alt=""></a></div>
          <div class="button__holder-pop"><a href="#" class="button project button-pop ">See source <img src="img/Frame.png" alt=""></a></div>
        </div>
          </div>
        </div>
        </div>
    </div>
    `;
    /* eslint-disable no-unused-vars */
    const closePop = () => {
      popContainer.style.display = 'none';
    };
    /* eslint-enable no-unused-vars */
  });
});
popContainer += popContainer;

//  form validation
const email = document.querySelector('#mail');//  selecting the email
const regex = /[A-Z]/g; //  capital leters
const verifyMail = () => {
  if ((email.value.match(regex)) != null) {
    email.setCustomValidity('please your email should be in small letters!');
  } else {
    email.setCustomValidity('');
  }
};
email.addEventListener('input', verifyMail);
const contactLink = document.getElementsByClassName('contactLink');// this an its usage s to run from linters
contactLink.addEventListener(onclick, hideMenu);
contactLink.addEventListener(onclick, showMenu);
