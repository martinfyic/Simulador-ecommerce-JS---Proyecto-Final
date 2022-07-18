//menu desplegable
let menu = document.querySelector(".menu");
let abrirMenu = document.querySelector(".open-menu");
let cerrarMenu = document.querySelector(".close-menu");

function toggleMenu(){
    menu.classList.toggle("menu_abrir");
};

abrirMenu.addEventListener("click", toggleMenu);
cerrarMenu.addEventListener("click", toggleMenu);

// menu desplegable para links menu abierto
const menuLinkMovil = document.querySelectorAll(`.menu a[href^="#"]`);

menuLinkMovil.forEach(menuLink => {
    menuLink.addEventListener("click", function() {
        menu.classList.remove("menu_abrir");
    })
});

//background nav
window.onscroll = function() {
    let navBarr = document.querySelector(".topheader");
    navBarr.classList.toggle("scrollMenu", window.scrollY > 0);
}

