const menuToggle = document.querySelector('.menu');
const menuNavigation = document.querySelector('#nav');
const hd = document.querySelector('.header');
const btnDropDown = document.querySelectorAll('.btnDrop');

let btns = btnDropDown.forEach((e) => {

    e.addEventListener('click', (e) => {
       let divDropDown = e.target.parentNode.parentNode.childNodes[3];
       let btnReadMore = e.target.parentNode.parentNode.childNodes[1].firstElementChild;

       divDropDown.classList.toggle('active');
       btnReadMore.classList.toggle('active');
    })

})





menuToggle.addEventListener('click', (e) => {
    e.preventDefault()

    menuToggle.classList.toggle('active');
    menuNavigation.classList.toggle('active');
    hd.classList.toggle('active');

})

