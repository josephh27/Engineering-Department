const parallax = document.getElementById("parallax");
const mainNavbar = document.querySelector("#main-navbar");


window.addEventListener("scroll", () => {
    let offset = window.scrollY;
    parallax.style.backgroundPositionY = offset * 0.7 + "px";

    
    //Color transition in the navbar whenever the window is scrolling
    let scrollTop = window.scrollY || document.documentElement.scrollTop;
    let navbarLinks = [document.querySelectorAll('.nav-link'), document.querySelectorAll('.nav-link.active')];
    let logo = document.querySelector('.navbar-brand > img');

    if (scrollTop > 1) {
        mainNavbar.style.background = "#ffffff";
        navbarLinks.forEach((nestedList) => {
            nestedList.forEach((elem) => {
                elem.classList.add('orange');
            })
        });    
        logo.src = 'img/logocpe.png';
    } else {
        mainNavbar.style.background = 'rgba(0,0,0,0.3)';
        navbarLinks.forEach((nestedList) => {
            nestedList.forEach((elem) => {
                elem.classList.remove('orange');
            })
        });
        logo.src = 'img/logocpe2.png';    
    }
    
    


    //For the main navbar delay effect
    if (scrollTop > 200) {
        mainNavbar.style.top = "-109px";
    } else {
        mainNavbar.style.top = "-0";
    }

})



// document.addEventListener('DOMContentLoaded', () => {
//     if (window.width <= 831) {
//         let dropdownToggles = document.querySelector(".nav-link.dropdown-toggle");
//         dropdownToggles.forEach((elem) => {
//             elem.removeAttribute("data-bs-hover");
//             elem.setAttribute("data-bs-toggle", "dropdown");
//         })
//     }
// })