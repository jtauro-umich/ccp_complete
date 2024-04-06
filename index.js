let button;
let isCourier = false;
let originalFont;

window.addEventListener("load", function() {
    console.log("Fun JavaScript coming your way!");

    button = document.querySelector("#button");
    button.addEventListener("click", changeStyle);
    originalFont = getComputedStyle(document.body).fontFamily;
});

function changeStyle() {
    if (!isCourier) {
        document.body.style.fontFamily = "'Courier New', Courier, monospace";
        button.style.fontFamily = originalFont;
    } else {
        document.body.style.fontFamily = originalFont;
        button.style.fontFamily =  "'Courier New', Courier, monospace";
    }
    isCourier = !isCourier;
}