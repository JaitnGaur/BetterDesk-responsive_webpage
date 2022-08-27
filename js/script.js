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
}
window.addEventListener('scroll', changeBG);


//ham-btn
let hambtn = document.querySelector(".ham-div__btn");
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
//---------------Todo List----------------------
let add = document.querySelector('#newtask-add');
let newTask = document.querySelector('#newtask');
let tasks = document.querySelector('#tasks');
let todo_li = document.querySelector('.section-betterdesk__todo-list-li')
add.onclick = function () {
    if (newTask.value == '') { alert("add some Task first!"); }
    else {
        tasks.innerHTML += `<li class="section-betterdesk__todo-list-li d-flex d-flex-between px-xs d-flex-align"><div class="d-flex d-flex-column d-flex-align"><span class="section-betterdesk__todo-list-li-lcircle d-inblock"></span><span class="section-betterdesk__todo-list-li-line d-inblock"></span></div><span>${newTask.value}</span><div class="section-betterdesk__todo-list-li-rcircle"></div></li>`
    }
    newTask.value = '';
}
todo_li.onclick = function () {
    if (this.style.opacity == 0.5) this.style.opacity = "1";
    else this.style.opacity = "0.5";
}
//hero-parallax effect
// let hero = document.querySelector('.hero-section');
// window.addEventListener('scroll', function () {
//     hero.style.backgroundPositionY = scrollY * 1;
//     console.log(scrollval);
// })