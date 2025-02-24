// targetting the hamburger links and hamburger icon
// will either add or remove the open class to the menu and icon

function toggleMenu() {
  const menu = document.querySelector(".hamburger-links");
  const icon = document.querySelector(".hamburger-icon");
  
  //  adding the class active to the menu and icon
  menu.classList.toggle("active");
  icon.classList.toggle("active");
}

