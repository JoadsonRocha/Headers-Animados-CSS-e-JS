
const $header = document.querySelector("header");
const $logo = document.querySelectorAll(".logo")[0];
window.addEventListener("scroll", toggleHeader, false);

function toggleHeader() {
    if (window.pageYOffset > 50 && $header.classList.contains("max-header")) {
        $header.classList.remove("max-header");
        $header.classList.add("min-header");
        $logo.firstElementChild.setAttribute("src", "_imagens/omnitech-logo-2.png");
    } else if(window.pageYOffset <= 50 && $header.classList.contains("min-header")) {
        $header.classList.add("max-header");
        $header.classList.remove("min-header");
    }
 }
