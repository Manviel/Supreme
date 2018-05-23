let media_size = screen.width;

window.onload = function () {
  switchClass();

  window.resize = function () {
    media_size = screen.width;
    switchClass();
  };
};

function switchClass() {
  const before = document.getElementById("b1");
  const after = document.getElementById("b2");

  if (media_size < 768) {
    before.parentNode.insertBefore(after, before);
  }
}