// date on header
const datefield = document.querySelector(".date");
const now = new Date();
const fulldate = new Intl.DateTimeFormat("en-US", { dateStyle: "full" }).format(now);
datefield.innerHTML = `<em>${fulldate}</em>`;

// date on footer. 
let year = now.getFullYear();
document.querySelector(".currentYear").textContent = year;
let currentdate = document.lastModified;
document.querySelector(".lastModified").textContent = currentdate;

// // Hamburger menu
// function toggleMenu(){
//     document.getElementById('mainMenu').classList.toggle('open');
// }

// const x = document.getElementById('hamburgerBtn');
// x.onclick = toggleMenu;

// hamburger
const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");


hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
})

document.querySelectorAll(".nav-link").forEach(n => n.addEventListener("click", () => {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
}))
