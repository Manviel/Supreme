import { Component, h } from "@stencil/core";

const cards = [
  {
    src: "../../assets/img/ph1.png",
    status: "new",
    title: "Only Skinny Jeans",
    price: "65.50"
  },
  {
    src: "../../assets/img/ph2.png",
    status: "new",
    title: "Neck Knitted Jumper",
    price: "76.25"
  },
  {
    src: "../../assets/img/ph3.png",
    status: "old",
    title: "Turtle Neck Jumper in Rib",
    price: "130.25"
  },
  {
    src: "../../assets/img/ph4.png",
    status: "old",
    title: "With Pathwork Crochet",
    price: "80.60"
  }
];

@Component({
  tag: "app-home",
  styleUrl: "app-home.css"
})
export class AppHome {
  render() {
    return (
      <div class="app-home">
        <article class="flex">
          <div class="block">
            <img src="../../assets/img/left.png" alt="Nike Red" class="high" />
            <h3 class="title pos">Nike Red</h3>
          </div>
          <section class="block">
            <img
              src="../../assets/img/right.png"
              alt="Caps & Hats"
              class="high"
            />
            <div class="flex col pos">
              <h3 class="title">Caps & Hats</h3>
              <i class="sale px-16">Sale -50%</i>
            </div>
          </section>
        </article>

        <h2 class="arrivals">New Arrivals</h2>

        <article class="flex space">
          {cards.map(c => (
            <app-card
              src={c.src}
              status={c.status}
              title={c.title}
              price={c.price}
            />
          ))}
        </article>

        <stencil-route-link url="/profile/stencil">
          <button class="btn large bold">All arrivals</button>
        </stencil-route-link>
      </div>
    );
  }
}
