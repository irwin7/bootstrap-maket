let elMenuBtn = document.querySelector(".menu")
let elNavbarList = document.querySelector(".navbar__list")

elMenuBtn.addEventListener("click" , ()=>{
  elNavbarList.classList.toggle("hello")
  console.log("salom")
})
