let media_size = screen.width;

window.onload = function () {
  switchTab();
  switchMob();

  window.resize = function () {
    media_size = screen.width;
    switchTab();
    switchMob();
  };
};

function switchMob() {
  const before = document.getElementById("before");
  const after = document.getElementById("after");

  if (media_size <= 375) {
    before.parentNode.insertBefore(after, before);
  }
}

function switchTab() {
  let sale = document.getElementById("sale");
  let h3 = sale.nextElementSibling.children[0];
  let i = sale.nextElementSibling.children[1];

  if (media_size == 768) {
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