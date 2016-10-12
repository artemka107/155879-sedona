var navMain = document.querySelector(".main-nav");
var navToggle = document.querySelector(".main-nav__btn");
var map = document.querySelector(".map")

    navMain.classList.remove("main-nav--nojs");
    map.classList.remove("map--no-js");


    navToggle.addEventListener("click", function() {
      if (navMain.classList.contains("main-nav--closed")) {
        navMain.classList.remove("main-nav--closed");
        navMain.classList.add("main-nav--opened");
      } else {
        navMain.classList.add("main-nav--closed");
        navMain.classList.remove("main-nav--opened");
      }
    });
