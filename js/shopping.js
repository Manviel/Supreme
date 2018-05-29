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