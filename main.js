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
