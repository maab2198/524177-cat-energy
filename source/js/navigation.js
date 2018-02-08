var pageHeader = document.querySelector('.page-header');
var navMain = document.querySelector('.navigation');
var navToggle = document.querySelector('.page-header__toggle');

pageHeader.classList.remove('page-header--nojs');

navToggle.addEventListener('click', function() {

navToggle.classList.toggle("page-header__toggle--close")
  if (navToggle.classList.contains('page-header__toggle--close')) {
    navMain.classList.add('navigation--opened');
  }
  else  {
    navMain.classList.remove('navigation--opened');
  }
});
