let media_size = screen.width;

function ready() {
  switchMob();

  window.resize = function () {
    media_size = screen.width;
    switchMob();
  };
}

function switchMob() {
  const before = document.getElementById("before");
  const after = document.getElementById("after");

  if (media_size <= 375) {
    before.parentNode.insertBefore(after, before);
  }
}

document.addEventListener("DOMContentLoaded", ready);