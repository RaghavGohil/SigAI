const hamburger = document.querySelector(".navbar .hamburger");
const navMenu = document.querySelector(".navbar .menu");

hamburger.addEventListener("click" , () => {hamburger.classList.toggle("active");navMenu.classList.toggle("active")})