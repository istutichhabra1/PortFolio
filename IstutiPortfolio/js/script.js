const hamburger = document.getElementById('hamburger');
const navMobile = document.getElementById('nav-mobile');

function toggleMenu() {
  navMobile.classList.toggle('open');
}

hamburger.addEventListener('click', toggleMenu);
