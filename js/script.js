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

        tasks.innerHTML += `<li class="section-betterdesk__todo-list-li d-flex d-flex-justify-between px-xs d-flex-align"><div class="d-flex-center"><div class="d-flex d-flex-column d-flex-align mr-s"><span class="section-betterdesk__todo-list-li-lcircle d-inblock"></span><span class="section-betterdesk__todo-list-li-line d-inblock"></span></div><div class="text-left"><span class="text-xs opacity-m">Today, 29 Aug<br></span><span class="text-ss">${newTask.value}</span></div></div><div class="section-betterdesk__todo-list-li-rcircle"></div></li>`

    }
    newTask.value = '';
}
todo_li.onclick = function () {
    if (todo_li.style.opacity == 1) this.style.opacity = "0.5";
    else todo_li.style.opacity = "1";
}
//hero-parallax effect
// let hero = document.querySelector('.hero-section');
// window.addEventListener('scroll', function () {
//     hero.style.backgroundPositionY = scrollY * 1;
//     console.log(scrollval);
// })
//-------------video..........................
let source = document.getElementById('source');
let video = document.querySelector('.section-video__video');
document.querySelector(".vid-1").onclick = function () { source.setAttribute('src', './videos/test-vid.mp4'); video.load(); vidimg.setAttribute('src', './images/video-woman.jpg'); }
document.querySelector(".vid-2").onclick = function () { source.setAttribute('src', './videos/child-study-vid.mp4'); video.load(); vidimg.setAttribute('src', './images/test-img2.jpg') };
document.querySelector(".vid-3").onclick = function () { source.setAttribute('src', './videos/scientist-vid.mp4'); video.load(); vidimg.setAttribute('src', './images/test-img3.jpg') };
document.querySelector(".vid-4").onclick = function () { source.setAttribute('src', './videos/cans-vid.mp4'); video.load(); vidimg.setAttribute('src', './images/test-img4.jpg') };
const allvids = document.querySelectorAll('.js-vid');
console.log(allvids);
let playbtn = document.querySelector(".section-video__playbtn");
let figcap1 = document.querySelector(".figcap-1");
let figcap2 = document.querySelector(".figcap-2");
let vidimg = document.querySelector('.section-video__video-img');
let fig = document.querySelector('.section-video-fig');
let pausebtn = document.querySelector('.pause-btn');


allvids.forEach(vid => {
    vid.addEventListener('click', () => {
        vid.classList.add('opacity-full');
        const restvids = Array.from(allvids).filter(currvid => currvid !== vid);
        restvids.forEach(item => item.classList.remove('opacity-full'));
    })
})


function toggleplay() {
    if (video.paused) {
        video.play();
        playbtn.style.display = "none";
        pausebtn.style.opacity = "0.2";
        // figcap1.style.display = "none";
        // figcap2.style.display = "none";
        // vidimg.style.display = "none";
        fig.style.display = "none";
    } else {
        video.pause();
        pausebtn.style.opacity = "0.8";


    }
}
playbtn.onclick = function () {
    toggleplay();
};
pausebtn.onclick = function () {
    toggleplay();
}
video.onclick = function () {
    toggleplay();
};