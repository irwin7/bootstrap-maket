let elMenuBtn = document.querySelector(".menu")
let elNavbarList = document.querySelector(".navbar__list")

elMenuBtn.addEventListener("click" , ()=>{
  elNavbarList.classList.toggle("hello")
  console.log("salom")
})

(function () {
  'use strict'

  // Fetch all the forms we want to apply custom Bootstrap validation styles to
  var forms = document.querySelectorAll('.needs-validation')

  // Loop over them and prevent submission
  Array.prototype.slice.call(forms)
    .forEach(function (form) {
      form.addEventListener('submit', function (event) {
        if (!form.checkValidity()) {
          event.preventDefault()
          event.stopPropagation()
        }

        form.classList.add('was-validated')
      }, false)
    })
})()