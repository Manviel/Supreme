import { Component, h } from "@stencil/core";

@Component({
  tag: "app-bag",
  styleUrl: "app-bag.css"
})
export class AppBag {
  render() {
    return (
      <div class="flex col">
        <h4 class="px-16 bold">Shopping bag</h4>

        <article class="flex align delivery">
          <p class="bold px-12">
            You've qualified for Free UK Next Day Delivery on your order. Don't
            forget to enter the code <span class="red">nextday</span> at
            checkout
          </p>
        </article>

        <article class="flex align space storage">
          <p class="total bold">Clear bag</p>

          <stencil-route-link url="/profile">
            <button class="btn large bold">Buy now</button>
          </stencil-route-link>

          <section>
            <span class="px-12">Total Cost</span>
            <p class="total bold">£251.50</p>
          </section>
        </article>
      </div>
    );
  }
}
