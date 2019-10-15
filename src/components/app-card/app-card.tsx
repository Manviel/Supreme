import { Component, Prop, h } from "@stencil/core";

@Component({
  tag: "app-card",
  styleUrl: "app-card.css"
})
export class AppCard {
  @Prop() src: string;
  @Prop() status: string;
  @Prop() title: string;
  @Prop() price: string;

  render() {
    return (
      <section class="app-card">
        <stencil-route-link url="/detail">
          <div style={{ "background-image": `url(${this.src})` }} class="bot" />
        </stencil-route-link>
        {this.status === "new" && <span class="new">NEW</span>}
        <h4 class="bold">{this.title}</h4>
        <p>£{this.price}</p>
      </section>
    );
  }
}
