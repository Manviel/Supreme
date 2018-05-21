let x = document.getElementsByClassName("custom-select");

for (let i = 0; i < x.length; i++) {
  let selElmnt = x[i].getElementsByTagName("select")[0];
  
  let a = document.createElement("DIV");
  a.setAttribute("class", "select-selected red");
  a.innerHTML = selElmnt.options[selElmnt.selectedIndex].innerHTML;
  x[i].appendChild(a);
  
  let b = document.createElement("DIV");
  b.setAttribute("class", "select-items select-hide");

  for (j = 1; j < selElmnt.length; j++) {
    let c = document.createElement("DIV");
    c.innerHTML = selElmnt.options[j].innerHTML;

    c.addEventListener("click", function(e) {
        let s = this.parentNode.parentNode.getElementsByTagName("select")[0];
        let h = this.parentNode.previousSibling;

        for (let i = 0; i < s.length; i++) {
          if (s.options[i].innerHTML == this.innerHTML) {
            s.selectedIndex = i;
            h.innerHTML = this.innerHTML;
            let y = this.parentNode.getElementsByClassName("same-as-selected");

            for (let k = 0; k < y.length; k++) {
              y[k].removeAttribute("class");
            }
            this.setAttribute("class", "same-as-selected");
            break;
          }
        }
        h.click();
    });
    b.appendChild(c);
  }
  x[i].appendChild(b);
  a.addEventListener("click", function(e) {
      e.stopPropagation();
      closeAllSelect(this);
      this.nextSibling.classList.toggle("select-hide");
      this.classList.toggle("select-arrow-active");
  });
}

function closeAllSelect(elmnt) {
  let arrNo = [];

  let x = document.getElementsByClassName("select-items");
  let y = document.getElementsByClassName("select-selected");

  for (let i = 0; i < y.length; i++) {
    if (elmnt == y[i]) {
      arrNo.push(i)
    } else {
      y[i].classList.remove("select-arrow-active");
    }
  }

  for (i = 0; i < x.length; i++) {
    if (arrNo.indexOf(i)) {
      x[i].classList.add("select-hide");
    }
  }
}

document.addEventListener("click", closeAllSelect);