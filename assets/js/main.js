class MenuResponsive {
    constructor() {
        this.menuContent = document.querySelector(".menu-responsive");
        this.closeIcon = document.createElement("i");
        this.hamburger = document.querySelector(".hamburger");
        this.hamburgerIcon = document.querySelector(".fa-bars");
    }
}

const menuResponsive = new MenuResponsive();

function openMenu() {
    menuResponsive.menuContent.style.transform = "translateX(0)";
    menuResponsive.menuContent.style.transition = "all 0.5s";
    menuResponsive.hamburgerIcon.style.display = "none";

    menuResponsive.closeIcon.className = "fa-solid fa-xmark";
    menuResponsive.closeIcon.style.fontSize = "2.2em";
    menuResponsive.closeIcon.style.color = "$light";
    menuResponsive.closeIcon.style.cursor = "pointer";
    menuResponsive.hamburger.appendChild(menuResponsive.closeIcon);

    menuResponsive.closeIcon.addEventListener("click", function() {
        menuResponsive.menuContent.style.transform = "translateX(300px)";
        menuResponsive.hamburger.removeChild(menuResponsive.closeIcon);
        menuResponsive.hamburgerIcon.style.display = "block";
    });
}