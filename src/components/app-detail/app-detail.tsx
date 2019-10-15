import { Component, h } from "@stencil/core";

@Component({
  tag: "app-detail",
  styleUrl: "app-detail.css"
})
export class AppDetail {
  render() {
    return (
      <div class="app-detail">
        <stencil-route-link url="/catalog">
          <h4 class="px-16 bold">Back to catalog</h4>
        </stencil-route-link>

        <article class="flex">
          <section class="container">
            <img src="../../assets/img/full.png" alt="full" class="thumnail" />

            <div class="flex item">
              <img
                src="../../assets/img/thumb_0.jpg"
                alt="thumb-0"
                class="item"
              />

              <img
                src="../../assets/img/thumb_1.jpg"
                alt="thumb-1"
                class="item"
              />

              <img
                src="../../assets/img/thumb_2.jpg"
                alt="thumb-2"
                class="item"
              />
            </div>
          </section>

          <form class="info">
            <h3 class="classic bold">Dark classic fit suit</h3>
            <i class="fine px-16">
              Feature fine Italian wool, this elegant suit has pick-stitch
              edging, cascade buttons at the cuffs
            </i>
            <p class="price">£180.60</p>

            <article class="flex align">
              <span class="size px-12">Size:</span>
              <span class="switch-border bold size">UK 52</span>
              <span class="switch-border bold size">UK 54</span>
              <span class="switch-border bold size">UK 56</span>
            </article>

            <article class="flex align">
              <span class="size px-12">Color:</span>
              <span class="switch-border bold size">Black</span>
              <span class="switch-border bold size">Blue</span>
            </article>

            <button class="btn bold large">Add item to Shopping bag</button>
          </form>
        </article>

        <app-banner></app-banner>
      </div>
    );
  }
}
