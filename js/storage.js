let count, total;

function getStorage() {
  let bag = document.getElementById("bag");
  total = 0;
  count = 0;

  Object.keys(localStorage).forEach(function () {
    total = localStorage.getItem("total");
    count = localStorage.getItem("count");
  });

  bag.innerText = `Bag ${total} (${count})`;
}

window.onload = () => getStorage();

class Delegate {
  constructor(elem) {
    this.self = elem;
    elem.onclick = this.onClick.bind(this);
  }

  clearStorage() {
    localStorage.clear();
    getStorage();
  }

  minusItem(elem) {
    let parent = elem.parentNode.parentNode;
    let price = parent.children[1].innerText;

    let x = parseFloat(price.match(/\d+[.][0-9]+/));

    total = parseFloat(total);

    if (count == 0) {
      count = 0;
      total = 0;
    } else {
      count--;
      total -= x
    }

    localStorage.setItem("total", total);
    localStorage.setItem("count", count);

    getStorage();
  }

  plusItem(elem) {
    let parent = elem.parentNode.parentNode;
    let price = parent.children[1].innerText;

    let x = parseFloat(price.match(/\d+[.][0-9]+/));

    total = parseFloat(total);

    localStorage.setItem("total", total += x);
    localStorage.setItem("count", ++count);

    getStorage();
  }

  onClick(event) {
    let action = event.target.dataset.action;
    if (action) this[action](event.target);
  }
}

new Delegate(document.body);