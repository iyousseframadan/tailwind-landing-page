let mobileBtn = document.querySelector("#mobile-btn");
let mobileMenu = document.querySelector("#mobile-menu");

mobileBtn.addEventListener("click",()=>{
    mobileMenu.classList.toggle("hidden");
})