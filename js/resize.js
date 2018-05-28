let mediaSize = window.innerWidth;

function ready() {
  switchMob();

  window.resize = function () {
    mediaSize = window.innerWidth;
    switchMob();
  };
}

function switchMob() {
  const before = document.getElementById("before");
  const after = document.getElementById("after");

  if (mediaSize <= 760) {
    before.parentNode.insertBefore(after, before);
  }
}

document.addEventListener("DOMContentLoaded", ready);