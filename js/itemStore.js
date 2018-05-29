let total, amount;

let bag = document.getElementById("bag");
let title = document.querySelector("h3.classic").setAttribute("id", window.mock[0].id);

function getStorage() {
  total = 0;
  amount = 0;

  if (localStorage.length > 0) {
    total = localStorage.getItem("total");

    for (let i = 0; i < localStorage.length - 1; i++) {
      let key = localStorage.key(i);
      let item = JSON.parse(localStorage.getItem(key));

      if (key !== "click") amount += parseInt(item.count);
    }
  }

  bag.innerText = `Bag ${total} (${amount})`;
}

window.onload = () => getStorage();

class Delegate {
  constructor(elem) {
    this.self = elem;
    elem.onclick = this.onClick.bind(this);
  }

  plusItem(elem) {
    let parent = elem.parentNode.parentNode;
    let price = parent.querySelector("p").innerText;

    let x = parseFloat(price.match(/\d+[.][0-9]+/));
    let id = window.mock[0].id;
    let item = window.mock[0];

    item.count++;

    total = parseFloat(total);

    localStorage.setItem("total", total += x);
    localStorage.setItem(id, JSON.stringify(item));

    getStorage();
  }

  onClick(event) {
    let action = event.target.dataset.action;
    if (action) this[action](event.target);
  }
}

new Delegate(document.body);