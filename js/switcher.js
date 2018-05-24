function switcher(imgs) {
  let expand = document.getElementById("expanded");
  
  expand.src = imgs.children[0].src;
  expand.parentElement.style.display = "flex";
}