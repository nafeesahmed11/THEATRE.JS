const mBar = document.querySelector(".mob-menu");
const rightOpen = document.querySelector(".right-close");
mBar.addEventListener("click",() =>{
    rightOpen.classList.toggle("right-open");
})