import { Component, h } from "@stencil/core";

@Component({
  tag: "app-header",
  styleUrl: "app-header.css"
})
export class AppHeader {
  render() {
    return (
      <header class="app-header">
        <article class="flex space">
          <stencil-route-link url="/">
            <h1 class="logo-tm">Template</h1>
          </stencil-route-link>

          <section class="flex space align">
            <stencil-route-link url="/bag">
              <button class="btn bold px-12">E-mail sign up</button>
            </stencil-route-link>
          </section>
        </article>
        <nav class="flex">
          <ul class="nav bold flex space">
            <li>Women</li>
            <li>Men</li>
            <li>Handbags</li>
            <li>Accessories</li>
            <li>Sale</li>
            <li>New Arrivals</li>
            <li>Clearence</li>
            <li>Store Location</li>
            <li>
              <input type="text" placeholder="Style Name" class="form-input" />
            </li>
          </ul>
        </nav>
      </header>
    );
  }
}
