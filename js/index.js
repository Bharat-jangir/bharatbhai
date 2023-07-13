hamburger_toggle_open = () => {
    document.querySelector(".sidemenu").style = "visibility:visible";
}
hamburger_toggle_close = () => {

    document.querySelector(".sidemenu").style = "visibility:hidden";



}
const currentLocation = location.href;
const menuItem = document.querySelectorAll('.header_nav_content span');
const links = document.querySelectorAll('.header_nav_content span a')
const menuLength = links.length
if (links[0].href == currentLocation) {
    menuItem[0].classList.add("header_nav_active")
}

const menuItemmobile = document.querySelectorAll('.sidemenu_nav div');
const linksmobile = document.querySelectorAll('.sidemenu_nav div a')
const menuLengthMobile = linksmobile.length
if (linksmobile[0].href == currentLocation) {
    menuItemmobile[0].classList.add("sidemenu_active")

}







