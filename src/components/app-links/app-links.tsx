import { Component, h } from "@stencil/core";

@Component({
  tag: "app-links",
  styleUrl: "app-links.css"
})
export class AppLinks {
  render() {
    return (
      <article class="app-links flex">
        <div class="flex grow side">
          <section class="flex col grow">
            <h3 class="label bold px-16">Quick Links</h3>
            <div class="flex col">
              <span class="px-14">Store locator</span>
              <span class="px-14">Gift cards</span>
              <span class="px-14">Size guide</span>
              <span class="px-14">About us</span>
              <span class="px-14">Support</span>
            </div>
          </section>
          <section class="flex col grow">
            <h3 class="label bold px-16">Customer Care</h3>
            <div class="flex col">
              <span class="px-14">Customer service</span>
              <span class="px-14">Track my order</span>
              <span class="px-14">Return policy</span>
              <span class="px-14">Shipping & delivery</span>
              <span class="px-14">Contact us</span>
              <span class="px-14">Careers</span>
            </div>
          </section>
        </div>

        <div class="flex grow col side">
          <section class="flex label">
            <div class="flex col grow">
              <h3 class="label bold px-16">Questions</h3>
              <span>
                Tweet us <b>@template</b>
              </span>
            </div>
            <div class="flex col grow">
              <h3 class="label bold px-16">Order by phone</h3>
              <span>8-800-409-47-12</span>
            </div>
          </section>

          <section class="flex col area two">
            <div class="service">
              <i class="px-16">
                We have our own delivery service which operates in 23 major
                European cities. Delivery time - 3-5 days.
              </i>
            </div>
            <div class="flex align">
              <img src="../../assets/img/fb.png" alt="facebook" class="icon" />
              <img src="../../assets/img/twi.png" alt="twitter" class="icon" />
            </div>
          </section>
        </div>
      </article>
    );
  }
}
