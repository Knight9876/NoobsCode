var header_half_1st = document.querySelector(".header-half-1st");
var header_half_2nd = document.querySelector(".header-half-2nd");
var sub_header_half_1st = document.querySelector(".sub-header-half-1st");
var sub_header_half_2nd = document.querySelector(".sub-header-half-2nd");
var start_button = document.querySelector(".start-button");
start_button.style.borderStyle = "none";
start_button.style.backgroundColor = "transparent";
start_button.style.padding = "0"

setTimeout(() => {
    header_half_1st.innerHTML = "Noobs"
    header_half_2nd.innerHTML = "Code"
    sub_header_half_1st.innerHTML = "Play Anytime"
    sub_header_half_2nd.innerHTML = "Study Anytime"
    start_button.innerHTML = "Start"
    start_button.style.borderStyle = "double"
    start_button.style.padding = "1rem 3rem"

}, 3300);

function openPage() {
    open("mode/mode.html", "_self")
}
