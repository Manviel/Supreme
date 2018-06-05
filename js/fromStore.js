let item = JSON.parse(localStorage.getItem("click"));

let info = `
  <section class="area take">
    <div class="flex container">
      <img src="${item.thumbnail}" id="expanded" alt="${item.id}" class="width high">
    </div>
  </section>
  <section class="info">
    <h3 class="classic bold take">${item.title}</h3>
    <i class="fine px-16 take">Feature fine Italian wool, this elegant suit has pick-stitch edging, cascade buttons at the cuffs</i>
    <p class="price take">£${item.price}</p>
    <div class="top">
      <button class="btn bold px-24" data-action="plusItem">Add to bag</button>
    </div>
  </section>
`;

document.getElementById("list").innerHTML += info;

let bag = document.getElementById("bag");

function getStorage() {
  total = 0;
  amount = 0;

  if (localStorage.length > 1) {
    total = localStorage.getItem("total");

    for (let i = 0; i < localStorage.length; i++) {
      let key = localStorage.key(i);
      let item = JSON.parse(localStorage.getItem(key));

      if (key !== "click" && key !== "total") amount += item.count;
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

  plusItem() {
    let x = item.discountedPrice;
    let id = item.id;
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