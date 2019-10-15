import { Component, h } from "@stencil/core";

@Component({
  tag: "app-banner",
  styleUrl: "app-banner.css"
})
export class AppBanner {
  render() {
    return (
      <article class="flex cards">
        <section class="block">
          <img src="../../assets/img/adidas.png" alt="Adidas" class="high" />
          <div class="flex col align abs">
            <h3 class="title bold white">Addidas Blue</h3>
            <i class="white sale px-16">For men</i>
          </div>
        </section>
        <section class="flex">
          <div class="block">
            <img src="../../assets/img/repair.png" alt="Repair" class="high" />
            <div class="flex col align abs">
              <h3 class="title bold white">Repair Patches</h3>
              <i class="white sale px-16">£150.50</i>
            </div>
          </div>
          <div class="block">
            <img src="../../assets/img/sale.png" alt="Sale" class="high" />
            <div class="flex col align abs">
              <h3 class="title bold red">Sale</h3>
              <i class="sale px-16">-70%</i>
            </div>
          </div>
        </section>
      </article>
    );
  }
}
