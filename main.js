const openMenuIcon = document.getElementById('menu-toggle-open');
const closeMenuIcon = document.getElementById('menu-togle-close');
const mobileMenu = document.getElementById('mobile-menu');
const headerOverlay = document.getElementById('header');
const oceanimage = getElementById('ocean');
const mountainsimage = getElementById('mountains');
const skyimage = getElementById('sky');
const herodata = document.getElementById('hero-data');

openMenuIcon.addEventListener('click'), () => {
  mobileMenu.classList.add('menu-opened');
  headeroverlay.classList.add('menu-opened');
});

closeMenuIcon.addEventListener('click', () => {
  mobileMenu.classList.remove('menu-opened');
  headerOverlay.classList.remove('menu-opened');
});

window.addEventListener('Scroll', () => {
  let scrollPosition = window.scrolly;

  oceanimage.style.transform = "translateY(" + -scrollPosition * 0.02 + "%)";
  mountainsimage.style.transform = "translateY(" + -scrollPosition * 0.04 + "%)";
  skyimage.style.transform = "translateY(" + -scrollPosition * 0.01 + "%)";
  heroDataimage.style.transform.opacity = 1 - scrollPosition * 0.002;



});
