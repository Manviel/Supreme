let x = document.getElementsByClassName("custom-select");

for (let i = 0; i < x.length; i++) {
  let elem = x[i].getElementsByTagName("select")[0];

  let selected = document.createElement("DIV");
  selected.setAttribute("class", "select-selected red");
  selected.innerHTML = elem.options[elem.selectedIndex].innerHTML;
  x[i].appendChild(selected);

  let list = document.createElement("DIV");
  list.setAttribute("class", "select-items select-hide");

  for (j = 1; j < elem.length; j++) {
    let option = document.createElement("DIV");
    option.innerHTML = elem.options[j].innerHTML;

    option.addEventListener("click", function (e) {
      let origin = this.parentNode.parentNode.getElementsByTagName("select")[0];
      let pick = this.parentNode.previousSibling;

      for (let i = 0; i < origin.length; i++) {
        if (origin.options[i].innerHTML == this.innerHTML) {
          origin.selectedIndex = i;
          pick.innerHTML = this.innerHTML;

          let same = this.parentNode.getElementsByClassName("same-as-selected");

          for (let k = 0; k < same.length; k++) {
            same[k].removeAttribute("class");
          }
          this.setAttribute("class", "same-as-selected");
          break;
        }
      }
      pick.click();
    });
    list.appendChild(option);
  }
  x[i].appendChild(list);

  selected.addEventListener("click", function (e) {
    e.stopPropagation();
    closeAllSelect(this);

    this.nextSibling.classList.toggle("select-hide");
    this.classList.toggle("select-arrow-active");
  });
}

function closeAllSelect(elm) {
  let arr = [];

  let list = document.getElementsByClassName("select-items");
  let chosen = document.getElementsByClassName("select-selected");

  for (let i = 0; i < chosen.length; i++) {
    if (elm == chosen[i]) {
      arr.push(i);
    } else {
      chosen[i].classList.remove("select-arrow-active");
    }
  }

  for (i = 0; i < x.length; i++) {
    if (arr.indexOf(i)) {
      list[i].classList.add("select-hide");
    }
  }
}

document.addEventListener("click", closeAllSelect);