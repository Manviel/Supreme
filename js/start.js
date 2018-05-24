let tablet = screen.width;

window.onload = function () {
  switchTab();

  window.resize = function () {
    tablet = screen.width;
    switchTab();
  };
};

function switchTab() {
  let sale = document.getElementById("sale");
  let h3 = sale.nextElementSibling.children[0];
  let i = sale.nextElementSibling.children[1];

  if (tablet == 768) {
    sale.src = "./img/sale.png";
    h3.innerText = "Sale";
    h3.classList.add("red");
    i.innerText = "-70%";
  } else {
    sale.src = "./img/right.png";
    h3.innerText = "Caps & Hats";
    i.innerText = "Sale -50%";
  }
}