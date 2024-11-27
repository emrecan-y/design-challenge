var desktopView = window.matchMedia("(min-width: 1440px)");
let menu = document.getElementsByClassName("navbar-menu");

desktopView.addEventListener("change", () => {
  menu[0].style.display = "";
});

function toggleBurgerMenu() {
  if (menu[0].style.display === "none" || menu[0].style.display === "") {
    menu[0].style.display = "flex";
  } else {
    menu[0].style.display = "none";
  }
}
