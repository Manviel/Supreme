import { Component, h } from "@stencil/core";

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

        <stencil-route-link url="/profile/stencil">
          <button class="btn-large">All arrivals</button>
        </stencil-route-link>
      </div>
    );
  }
}
