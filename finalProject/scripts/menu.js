let btn = document.querySelector(".hamburger")
let menu = document.querySelector(".menu")

function showMenu() {
    
    if (menu.style.display == "none") {
        menu.style.display = "block"
    } else {
        menu.style.display = "none"
    }
} 
btn.addEventListener("click", showMenu)


function changeMenu() {
    menu.style.display="none"
    if(window.innerWidth > 1100) {
        menu.style.display = "flex"
    }
}
window.onresize = changeMenu;