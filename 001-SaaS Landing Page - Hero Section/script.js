let navbarContainer = document.getElementById("navbar-container");
let logo = document.getElementById("logo");
let menu = document.getElementById("menu");
let btn = document.getElementById("theme-toggle-button");
let container = document.getElementById("theme-toggle-container");
let body = document.body;
let headerTitle = document.querySelector(".header-title");
let demoLink = document.querySelector(".demo-link");
function toggleTheme() {
  let buttonCurrentTheme = btn.className;
  if (buttonCurrentTheme === "theme-toggle-button-dark") {
    btn.classList = "theme-toggle-button";
    container.classList = "theme-toggle-container";
    navbarContainer.classList = "navbar-container";
    logo.classList = "logo";
    menu.classList = "menu";
    body.classList = "";
    headerTitle.classList = "header-title";
    demoLink.classList = "demo-link";
  } else {
    btn.classList = "theme-toggle-button-dark";
    container.classList = "theme-toggle-container-dark";
    navbarContainer.classList = "navbar-container-dark";
    logo.classList = "logo-dark";
    menu.classList = "menu-dark";
    body.classList = "dark";
    headerTitle.classList = "header-title-dark";
    demoLink.classList = "demo-link-dark";
  }
}
