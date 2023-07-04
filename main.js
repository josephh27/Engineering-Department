const parallax = document.getElementById("parallax");

window.addEventListener("scroll", () => {
    let offset = window.scrollY;
    parallax.style.backgroundPositionY = offset * 0.7 + "px";
    console.log(parallax.style.backgroundPositionY);
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