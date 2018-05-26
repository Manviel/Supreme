let media_size = window.innerWidth;

function ready() {
  switchMob();

  window.resize = function () {
    media_size = window.innerWidth;
    switchMob();
  };
}

function switchMob() {
  const before = document.getElementById("before");
  const after = document.getElementById("after");

  if (media_size <= 760) {
    before.parentNode.insertBefore(after, before);
  }
}

document.addEventListener("DOMContentLoaded", ready);