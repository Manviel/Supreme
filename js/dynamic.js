let list = document.getElementById("list");

list.innerHTML = '';

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
  list.innerHTML += `
    <section class="tag px-14">
      <img src="${window.catalog[i].thumbnail}" alt="${window.catalog[i].id}" class="bot">
      ${window.catalog[i].hasNew ? '<span class="new">NEW</span>' : ''}
      <h4 class="bold">${window.catalog[i].title}</h4>
      <p>${window.catalog[i].discountedPrice === null ? window.catalog[i].placeholder : '£' + window.catalog[i].discountedPrice}</p>
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