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

document.querySelectorAll('.navbar a').forEach((link) => {
  link.addEventListener('click', () => {
    navbar.classList.remove('active');
  });
});

// socia media dotted part //////////////////////////////////////////////////////////
const navigation = document.querySelector('.navigation');
navigation.addEventListener('click', () => {
  navigation.classList.toggle('active');
});

document.addEventListener('DOMContentLoaded', () => {
  const preloader = document.querySelector('.preloader');
  const content = document.querySelector('.content');

  setTimeout(() => {
    preloader.style.opacity = '0';
    preloader.style.visibility = 'hidden';
    content.style.display = 'block';
  }, 2000);
});

const toggleSwitch = document.querySelectorAll('.theme-toggle');
toggleSwitch.forEach((elem) => {
  elem.addEventListener('click', () => {
    document.body.classList.toggle('light-mode');
  });
});
