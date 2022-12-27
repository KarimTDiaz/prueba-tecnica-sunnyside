const menu=document.getElementById('menu');
const menuIcon=document.getElementById('hamburger');

menuIcon.addEventListener('click',() => {
    menu.classList.toggle('menu--show');
})