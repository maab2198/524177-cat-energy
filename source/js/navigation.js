var navMain = document.querySelector('.navigation');
var navToggle = document.querySelector('.navigation__toggle');

navMain.classList.remove('navigation--nojs');

navToggle.addEventListener('click', function() {

navToggle.classList.toggle("navigation__toggle--close")
  if (navToggle.classList.contains('navigation__toggle--close')) {
    navMain.classList.add('navigation--opened');
  }
  else  {
    navMain.classList.remove('navigation--opened');
  }
});
