document.addEventListener("DOMContentLoaded", function () {

    const navIcon = document.getElementById("burger");
    const menuOn = document.getElementById("menu-on");
    const menuMobile = document.getElementById("menu-mobile");

    navIcon.addEventListener( "click", function() {
        this.classList.toggle("open");
        menuMobile.classList.toggle("grow");
        menuOn.classList.toggle("visible_menu");

        /* Subir la página al principio cuando pulsemos en el menú colapsado */
        window.scrollTo({top: 0, behavior: "smooth"});
    });

    /* cuando pulsamos una opción del nav debe cerrarse el menu_mobile */
    const menuLinks = document.querySelectorAll(".menu-mobile .menu-links li a");

    menuLinks.forEach( link => {
        link.addEventListener("click", function() {
            navIcon.classList.remove("open");
            menuMobile.classList.toggle("grow");
            menuOn.classList.remove("visible_menu");
        });
    });


});
