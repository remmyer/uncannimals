//Toggle dark and light mode

const moon = document.querySelector(".fa-solid.fa-moon");
const sun = document.querySelector(".fa-solid.fa-sun");
const navBtn = document.querySelector('a');

moon.addEventListener("click", darkMode)
sun.addEventListener("click", lightMode)

function darkMode(){
    document.body.style.backgroundColor = "rgb(34, 35, 36)";
    document.body.style.color = "rgb(255, 255, 255)";
    navBtn.style.color = "rgb(255, 255, 255)";
    document.body.style.transition = "200ms ease-in"
    moon.style.display = "none"
    sun.style.display = "block"
    topBtn.style.color = "rgb(163, 70, 70)"
}

function lightMode(){
    document.body.style.backgroundColor = "rgb(229, 229, 229)";
    document.body.style.color = "rgb(0, 0, 0)";
    navBtn.style.color = "rgb(0, 0, 0)";
    sun.style.display = "none"
    moon.style.display = "block"
    topBtn.style.color = "rgb(209, 89, 109)"
}

//Scroll to top button

const topBtn = document.getElementById("scrollToTop");

window.onscroll = function() {scrollFunction()};

function scrollFunction(){
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        topBtn.style.display = "block"
    }
    else{
        topBtn.style.display = "none"
    }
}

topBtn.onclick = function scrolltoTop(){
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0
}