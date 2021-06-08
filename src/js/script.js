const hamburger = document.querySelector(".hamburger"),
        menu = document.querySelector(".menu"),
        closeX = document.querySelector(".menu__close");

hamburger.addEventListener("click", () => {
    menu.classList.add('active');
});

closeX.addEventListener("click", () => {
    menu.classList.remove('active');

});

const counters = document.querySelectorAll('.skills__proc');
    lines = document.querySelectorAll(".skills__scale-skill-orange");

counters.forEach((item, i) => {
    lines[i].style.width = item.innerHTML;
});

function validateForms(form){
    $(form).validate({
      rules: {
        text: 'required',
        name: {
            required: true,
            minlength: "2"
        },
        email:{
            required: true,
            email: true
        }
      },
      messages: {
        name: "Пожалуйста, введите своё имя",
        text: "Пожалуйста, введите текст",
        email: {
          required: "Пожалуйста, введите эл.почту",
          email: "Пример name@domain.com"
        }
      }
    });

}
validateForms('.contacts__form');
