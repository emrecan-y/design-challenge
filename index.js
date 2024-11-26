function toggleBurgerMenu() {
  let menu = document.getElementsByClassName("navbar-menu");
  if (menu[0].style.display === "none") {
    menu[0].style.display = "flex";
  } else {
    menu[0].style.display = "none";
  }
}
