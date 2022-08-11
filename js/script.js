 let navMenu = document.getElementById('nav-menu');
 let navOpen = document.getElementById('open');
 let navClose = document.getElementById('close');

 navOpen.addEventListener('click',function () {
    navMenu.classList.add("nav__show");
 })
 navClose.addEventListener('click',function () {
    navMenu.classList.remove("nav__show");
    
 })
