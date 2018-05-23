function toggle() {
  const nav = document.getElementById("nav");
  const ico = document.getElementById("ico");

  if (nav.style.display === "flex") {
    nav.style.display = "none";
    ico.src = "./img/ico_menu.png";
  } else {
    nav.style.display = "flex";
    ico.src = "./img/ico_close.png";
  }
}