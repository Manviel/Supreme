let range = document.getElementById("points");
let res = document.getElementById("res");

range.addEventListener("input", function() {
  res.innerHTML = `£ ${range.value}`;
}, false);