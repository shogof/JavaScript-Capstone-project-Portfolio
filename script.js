const menuIcon = document.querySelector('#menu-icon');
const navbar = document.querySelector('.navbar');
const sections = document.querySelectorAll('section');
const navlinks = document.querySelectorAll('header nav a ');

window.onscroll = () => {
  sections.forEach((sec) => {
    const top = window.scrollY;
    const offset = sec.offsetTop - 150;
    const height = sec.offsetHeight;
    const id = sec.getAttribute;

    if (top >= offset && top < offset + height) {
      navlinks.forEach((links) => {
        links.classList.remove('active');
        document
          .querySelector(`header nav a[href*=' ${id}']`)
          .classList.add('active');
      });
    }
  });
};

menuIcon.addEventListener('click', () => {
  menuIcon.classList.toggle('bx-x');
  navbar.classList.toggle('active');
});

// socia media dotted part //////////////////////////////////////////////////////////
const navigation = document.querySelector('.navigation');
navigation.addEventListener('click', () => {
  navigation.classList.toggle('active');
});
