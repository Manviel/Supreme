let total, amount;

let bag = document.getElementById("bag");
let title = document.querySelector("h3.classic");

function getStorage() {
  total = 0;
  amount = 0;

  if (localStorage.length > 0) {
    setId();

    total = localStorage.getItem("total");

    for (let i = 0; i < localStorage.length - 1; i++) {
      let key = localStorage.key(i);
      let value = localStorage.getItem(key);

      if (title.getAttribute("id") === key) {
        amount += parseInt(value);
      }
    }
  }

  bag.innerText = `Bag ${total} (${amount})`;
}

window.onload = () => getStorage();

function setId() {
  if (title.innerText === window.mock[0].title) {
    title.setAttribute("id", window.mock[0].id);
  }
}

class Delegate {
  constructor(elem) {
    this.self = elem;
    elem.onclick = this.onClick.bind(this);
  }

  plusItem(elem) {
    let parent = elem.parentNode.parentNode;
    let price = parent.querySelector("p").innerText;

    let x = parseFloat(price.match(/\d+[.][0-9]+/));

    if (title.innerText === window.mock[0].title) {
      let id = window.mock[0].id;
      let count = localStorage.getItem(id) || 0;

      total = parseFloat(total);

      localStorage.setItem("total", total += x);
      localStorage.setItem(id, ++count);
    }

    getStorage();
  }

  onClick(event) {
    let action = event.target.dataset.action;
    if (action) this[action](event.target);
  }
}

new Delegate(document.body);