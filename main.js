const MenuSection = document.getElementById('Menu');

const showMenu = () => {
  MenuSection.style.display = 'block';
};
const hideMenu = () => {
  MenuSection.style.display = 'none';
};
const contactLink = document.getElementsByClassName('contactLink');
contactLink.addEventListener(onclick, hideMenu);
contactLink.addEventListener(onclick, showMenu);