const navToggle = document.querySelector(".nav-toggle")
const navMenu = document.querySelector(".nav-menu-item")   

navToggle.addEventListener("click", () => {
    navMenu.classList.toggle('nav-menu-item');

});