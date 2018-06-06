let total, amount;

let bag = document.getElementById("bag");
let list = document.getElementById("list");
let fields = document.getElementsByClassName("field");
let cost = document.getElementById("cost");

function getStorage() {
  total = 0;
  amount = 0;

  if (localStorage.length > 0) {
    render();

    total = localStorage.getItem("total");

    for (let j = 0; j < fields.length; j++) {
      let count = fields[j].children[4].childNodes[2];

      amount += parseInt(count.data);
    }
  }

  bag.innerText = `Bag ${total} (${amount})`;
  cost.innerText = `£${total}`;
}

window.onload = () => getStorage();

function render() {
  list.innerHTML = '';

  localStorage.removeItem("click");

  for (let i = 0; i < localStorage.length; i++) {
    let key = localStorage.key(i);
    let item = JSON.parse(localStorage.getItem(key));

    if (key !== "total") {
      list.innerHTML += `
        <section class="flex tag px-14 grow">
          <img src="${item.thumbnail}" alt="${item.id}" class="bot">
          ${item.hasNew ? '<span class="new">NEW</span>' : ''}
          <div class="flex col field" id="${item.id}">
            <h4 class="bold">${item.title}</h4>
            <p class="px-16 bold">£${item.discountedPrice}</p>
            <span>Color: ${item.colors}</span>
            <span>Size: ${item.sizes}</span>
            <span class="flex align">Quantity:
              <button class="sign minus" data-action="minusItem"></button>${item.count}
              <button class="sign plus" data-action="plusItem"></button>
            </span>
            <button class="remove bold red" data-action="removeItem">Remove item</button>
          </div>
        </section>
      `;
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

    document.body.children[4].innerHTML = '<h2 class="flex align">Your shopping bag is empty. Use Catalog to add new items</h2>';

    getStorage();
  }

  buyNow() {
    localStorage.clear();

    document.body.children[4].innerHTML = '<h2 class="flex align">Thank you for your purchase</h2>';

    getStorage();
  }

  minusItem(elem) {
    let parent = elem.parentNode.parentNode;
    let price = parent.children[1].innerText;

    let x = parseFloat(price.match(/\d+[.][0-9]+/));
    let id = parent.getAttribute("id");
    let item = JSON.parse(localStorage.getItem(id));

    total = Number(total);

    if (item.count == 0) {
      total = total;
    } else {
      item.count--;
      total -= x;
    }

    localStorage.setItem("total", total.toFixed(2));
    localStorage.setItem(id, JSON.stringify(item));

    getStorage();
  }

  plusItem(elem) {
    let parent = elem.parentNode.parentNode;
    let price = parent.children[1].innerText;

    let x = parseFloat(price.match(/\d+[.][0-9]+/));
    let id = parent.getAttribute("id");
    let item = JSON.parse(localStorage.getItem(id));

    item.count++;

    total = Number(total);
    total += x;

    localStorage.setItem("total", total.toFixed(2));
    localStorage.setItem(id, JSON.stringify(item));

    getStorage();
  }

  removeItem(elem) {
    let parent = elem.parentNode;
    let price = parent.children[1].innerText;

    let x = parseFloat(price.match(/\d+[.][0-9]+/));
    let id = parent.getAttribute("id");
    let item = JSON.parse(localStorage.getItem(id));

    total = Number(total);

    total -= (x * item.count);
    item.count = 0;

    localStorage.setItem("total", total.toFixed(2));
    localStorage.removeItem(id);

    parent.parentNode.remove();

    getStorage();
  }

  onClick(event) {
    let action = event.target.dataset.action;
    if (action) this[action](event.target);
  }
}

new Delegate(document.body);