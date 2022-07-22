// JavaScript Document

// Variabelen navbar
var navbar = document.querySelector("nav");
var hamburger = document.querySelector(".header-toggle");
var close = document.querySelector(".showClose");
// Eind variabelen navbar

// Variabelen zwart achtergrond
var blackBackground = document.querySelector(".blackBackground");
var blackBackgroundOff = document.querySelector(".blackBackgroundOn");
// Eind variabelen zwart achtergrond

hamburger.addEventListener("click", toggleHamburgerOn);
close.addEventListener("click", toggleHamburgerOff);
blackBackground.addEventListener("click", toggleHamburgerOff);

function toggleHamburgerOn(){
    navbar.classList.add("showNav");
    blackBackground.classList.add("blackbackgroundOn");
}

function toggleHamburgerOff(){
    navbar.classList.remove("showNav");
    blackBackground.classList.remove("blackbackgroundOn");
}

// BRON : https://www.w3schools.com/howto/howto_js_sticky_header.asp

var header = document.querySelector("header");
var main = document.querySelector("main");

window.onscroll = function(){
    calcSticky();
};

var sticky = header.offsetTop;

function calcSticky(){
    if(window.pageYOffset > sticky){
        header.classList.remove("header-hidden")
        header.classList.add("header-sticky")
        main.classList.add("stickyMargin")
    }else{
        header.classList.remove("header-sticky")
        header.classList.add("header-hidden")
        main.classList.remove("stickyMargin")
    }
}