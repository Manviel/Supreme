let total, amount;

let bag = document.getElementById("bag");
let fields = document.getElementsByClassName("field");
let cost = document.getElementById("cost");

function getStorage() {
  total = 0;
  amount = 0;

  if (localStorage.length > 0) {
    setId();

    total = localStorage.getItem("total");

    for (let i = 0; i < localStorage.length - 1; i++) {
      for (let j = 0; j < fields.length; j++) {
        let key = localStorage.key(i);
        let value = localStorage.getItem(key);
        let count = fields[j].children[4].childNodes[2];

        if (fields[j].getAttribute("id") === key) {
          amount += parseInt(value);

          count.data = value;
        }
      }
    }
  }

  bag.innerText = `Bag ${total} (${amount})`;
  cost.innerText = `£${total}`;
}

window.onload = () => getStorage();

function setId() {
  for (let i = 0; i < window.catalog.length; i++) {
    for (let j = 0; j < fields.length; j++) {
      let title = fields[j].querySelector("h4");

      if (title.innerText === window.catalog[i].title) {
        fields[j].setAttribute("id", window.catalog[i].id);
      }
    }
  }
}

class Delegate {
  constructor(elem) {
    this.self = elem;
    elem.onclick = this.onClick.bind(this);
  }

  clearStorage() {
    localStorage.clear();

    document.body.children[2].innerHTML = '<h2 class="flex align cent">Your shopping bag is empty. Use Catalog to add new items</h2>';

    getStorage();
  }

  buyNow() {
    localStorage.clear();

    document.body.children[2].innerHTML = '<h2 class="flex align cent">Thank you for your purchase</h2>';

    getStorage();
  }

  minusItem(elem) {
    let parent = elem.parentNode.parentNode;
    let price = parent.children[1].innerText;
    let count = parent.children[4].childNodes[2];
    let title = parent.querySelector("h4");

    let x = parseFloat(price.match(/\d+[.][0-9]+/));

    for (let i = 0; i < window.catalog.length; i++) {
      if (title.innerText === window.catalog[i].title) {
        let id = window.catalog[i].id;

        total = parseFloat(total);

        if (count.data == 0) {
          count.data = 0;
          total = 0;
        } else {
          count.data--;
          total -= x
        }

        localStorage.setItem("total", total);
        localStorage.setItem(id, count.data);
      }
    }

    getStorage();
  }

  plusItem(elem) {
    let parent = elem.parentNode.parentNode;
    let price = parent.children[1].innerText;
    let count = parent.children[4].childNodes[2];
    let title = parent.querySelector("h4");

    let x = parseFloat(price.match(/\d+[.][0-9]+/));

    for (let i = 0; i < window.catalog.length; i++) {
      if (title.innerText === window.catalog[i].title) {
        let id = window.catalog[i].id;

        total = parseFloat(total);

        localStorage.setItem("total", total += x);
        localStorage.setItem(id, ++count.data);
      }
    }

    getStorage();
  }

  removeItem(elem) {
    let parent = elem.parentNode;
    let count = parent.children[4].childNodes[2];
    let title = parent.querySelector("h4");

    for (let i = 0; i < window.catalog.length; i++) {
      if (title.innerText === window.catalog[i].title) {
        let id = window.catalog[i].id;

        total = parseFloat(total);

        if (count.data == 0) {
          count.data = 0;
          total = 0;
        } else {
          count.data--;
          total -= x
        }

        localStorage.setItem("total", total);
        localStorage.removeItem(id);

        parent.parentNode.remove();
      }
    }

    getStorage();
  }

  onClick(event) {
    let action = event.target.dataset.action;
    if (action) this[action](event.target);
  }
}

new Delegate(document.body);