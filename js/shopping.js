let bag = document.getElementById("bag");

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

  goToDetail(elem) {
    let title = elem.querySelector("h4");

    for (let i = 0; i < window.catalog.length; i++) {
      if (title.innerText === window.catalog[i].title) {
        let serial = JSON.stringify(window.catalog[i]);

        localStorage.setItem("click", serial);
      }
    }
  }

  onClick(event) {
    let action = event.target.dataset.action;
    if (action) this[action](event.target);
  }
}

new Delegate(document.body);