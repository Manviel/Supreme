let list = document.getElementById("list");

list.innerHTML = "";

window.catalog.sort((a, b) => {
  return new Date(b.dateAdded) - new Date(a.dateAdded);
});

const promo = `
  <article class="all flex cent width">
    <section>
      <h2 class="px-24 ban bold">Last weekend
        <span class="red">extra 50%</span> off on all reduced boots and shoulder bags
      </h2>
      <i>This offer is valid in-store and online. Prices displayed reflect this additional disount. This offer ends at 11:59
        GMT on March 1st 2015</i>
    </section>
  </article>
`;

for (let i = 0; i < window.catalog.length; i++) {
  let item = window.catalog[i];

  list.innerHTML += `
    <section class="tag">
      <div class="bot tag" style="background-image: url(${
        item.thumbnail
      })"></div>
      <a href="./detail.html" class="px-14" data-action="goToDetail">
        ${item.hasNew ? '<span class="new">NEW</span>' : ""}
        <h4 class="bold">${item.title}</h4>
        ${
          item.discountedPrice !== item.price
            ? `<i>£${item.price} -${100 -
                (item.discountedPrice * 100) / item.price}%</i>`
            : ""
        }
        <p class="inline">
        ${
          item.discountedPrice === null
            ? item.placeholder
            : "£" + item.discountedPrice
        }
        </p>
      </a>
    </section>
  `;

  if (i === 1 && mediaSize <= 760 && mediaSize > 370) {
    list.innerHTML += promo;
  } else if (i === 2 && mediaSize <= 1024 && mediaSize > 760) {
    list.innerHTML += promo;
  } else if (i === 3 && mediaSize > 1024) {
    list.innerHTML += promo;
  }
}
