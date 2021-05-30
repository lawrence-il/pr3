const hamburger = document.querySelector(".hamburger")
const menu = document.querySelector(".menu")
const closeX = document.querySelector(".menu__close")

hamburger.addEventListener("click", () => {
    menu.classList.add('active');
});

closeX.addEventListener("click", () => {
    menu.classList.remove('active');

});

const counters = document.querySelectorAll('.skills__proc')
    lines = document.querySelectorAll(".skills__scale-skill-orange")

counters.forEach((item, i) => {
    lines[i].style.width = item.innerHTML;
})