'use strict'



/**
 * addEvent on element
 */

const addEventOnElem = function (elem, type, callback) {
  if (elem.length > 1) {
    for (let i = 0; i < elem.length; i++) {
      elem[i].addEventListener(type, callback);
    }
  } else {
    elem.addEventListener(type, callback);
  }
}



/**
 * navbar toggle
 */

const navbar = document.querySelector("[data-navbar]");
const navbarLinks = document.querySelectorAll("[data-nav-link]");
const navbarToggler = document.querySelector("[data-nav-toggler]");

const toggleNav = function () {
  navbar.classList.toggle("active");
  navbarToggler.classList.toggle("active");
}

addEventOnElem(navbarToggler, "click", toggleNav);

const closeNav = function () {
  navbar.classList.remove("active");
  navbarToggler.classList.remove("active");
}

addEventOnElem(navbarLinks, "click", closeNav);



/**
 * header active
 */

const header = document.querySelector("[data-header]");
const backTopBtn = document.querySelector("[data-back-top-btn]");

window.addEventListener("scroll", function () {
  if (window.scrollY >= 100) {
    header.classList.add("active");
    backTopBtn.classList.add("active");
  } else {
    header.classList.remove("active");
    backTopBtn.classList.remove("active");
  }
});

// Smooth Scroll
const lenis = new Lenis()
lenis.on('scroll', (e) => {
    console.log(e)
})
function raf(time) {
    lenis.raf(time)
    requestAnimationFrame(raf)
}
requestAnimationFrame(raf)


// Scroll Down - Button
document.addEventListener('DOMContentLoaded', function () {
    const scrollBtn = document.getElementById('scrollBtn');
    window.addEventListener('scroll', function () {
        const box = document.querySelector('.scrollBtn');
        if (window.scrollY > 0) {
            box.classList.add('move');
        } else {
            box.classList.remove('move');
        }
    });
});


// Preloader Text 
window.addEventListener('load', function () {
    const preloader = document.getElementById('preloader');
    const firstText = document.getElementById('first-text');
    const secondText = document.getElementById('second-text');
    // Show the first text
    firstText.style.opacity = '1';
    // loading animation
    setTimeout(function () {
        firstText.style.opacity = '0';
        secondText.style.opacity = '1';
    }, 1000);
    setTimeout(function () {
        preloader.style.display = 'none';
    }, 4000);
});



