hamburger_toggle_open = () => {
    document.querySelector(".sidemenu").style = "visibility:visible";
}
hamburger_toggle_close = () => {

    document.querySelector(".sidemenu").style = "visibility:hidden";



}


let mouseCursor = document.querySelector(".cursor");


function cursor(e) {
    mouseCursor.style.top = e.pageY + 'px';
    mouseCursor.style.left = e.pageX + 'px';
}
window.addEventListener("mousemove", cursor);


const currentLocation = location.href;
const menuItem = document.querySelectorAll('.header_nav_content span');
const links = document.querySelectorAll('.header_nav_content span a')
const menuLength = links.length
if (links[1].href == currentLocation) {
    menuItem[1].classList.add("header_nav_active")
}

const menuItemmobile = document.querySelectorAll('.sidemenu_nav div');
const linksmobile = document.querySelectorAll('.sidemenu_nav div a')
const menuLengthMobile = linksmobile.length
if (linksmobile[1].href == currentLocation) {
    menuItemmobile[1].classList.add("sidemenu_active")

}

