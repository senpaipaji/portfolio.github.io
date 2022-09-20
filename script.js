 let navMenu = document.getElementById('nav-menu');
 let navOpen = document.getElementById('open');
 let navClose = document.getElementById('close');
 
 window.onload = () =>{
   AOS.init();
 }
 console.log('java script is running');
 navOpen.addEventListener('click',function () {
    navMenu.classList.add("nav__show");
 })
 navClose.addEventListener('click',function () {
    navMenu.classList.remove("nav__show");
    
 })

//underline                         uppgrade needed
let listItem = document.getElementsByClassName('nav__list__item');
let underlineHost = document.getElementsByClassName('underline__host');


listItem[0].addEventListener('mouseover', function() {
      underlineHost[0].classList.add('underline');
})

listItem[0].addEventListener('mouseout', function() {
 underlineHost[0].classList.remove('underline');
})
listItem[1].addEventListener('mouseover', function() {
   underlineHost[1].classList.add('underline');
})

listItem[1].addEventListener('mouseout', function() {
underlineHost[1].classList.remove('underline');
})
listItem[2].addEventListener('mouseover', function() {
   underlineHost[2].classList.add('underline');
})

listItem[2].addEventListener('mouseout', function() {
underlineHost[2].classList.remove('underline');
})


      
// document.querySelectorAll('.nav__list__item').forEach(item => {
//    item.addEventListener('mouseover', event => {
//       let i = 
//     underlineHost[i].classList.add('underline');
//    })
//  })
console.log("working fine ");