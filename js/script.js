//header scroll
let header = document.querySelector('.header');
let hero = document.querySelector('.hero-section');
function changeBG() {
    if (scrollY > 50) {
        header.classList.add('active');
    }
    else if ((scrollY < 50) & (hamopen == false)) {
        header.classList.remove('active');
    }
    // hero.style.backgroundPositionY = scrollY * 1 + "px";
    // console.log(scrollY * 1 + "px");

}
window.addEventListener('scroll', changeBG);
//ham-btn


let hambtn = document.querySelector(".ham-div__bars");
let ul = document.querySelector(".header__nav-lists");
let hamopen = false;
hambtn.addEventListener("click", function () {
    if (hamopen == false) {
        hambtn.classList.add("open");
        header.classList.add("active");
        ul.classList.add("active");
        hamopen = true;
    } else {
        hambtn.classList.remove("open");
        ul.classList.remove("active");
        hamopen = false;
        if (scrollY == 0) {
            header.classList.remove("active");
        }
    }
});
//hero-parallax effect
// let hero = document.querySelector('.hero-section');
// window.addEventListener('scroll', function () {
//     hero.style.backgroundPositionY = scrollY * 1;
//     console.log(scrollval);
// })