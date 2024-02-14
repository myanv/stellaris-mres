let centralButton = document.getElementById("stnull");
let outerRing = document.getElementById("outer-rings");
let clicked = true;
let highlightsBar = document.getElementById("highlights-bar");
let loginButtons = document.getElementsByClassName("login-buttons");

centralButton.addEventListener("click", checkClick);

function checkClick() {
    if (clicked) {
        centralButton.style.opacity = 0.5;
        outerRing.style.opacity = 0.5;
        clicked = false;

        highlightsBar.style.opacity = 100;
        highlightsBar.style.display = "inline-flex";
        highlightsBar.style.animation = "slide-in 0.5s ease-in-out";
    } else {
        centralButton.style.opacity = 1;
        outerRing.style.opacity = 1;
        clicked = true;
        highlightsBar.style.animation = "slide-out 0.5s ease-in-out";
        highlightsBar.style.opacity = 0;
    }
};