import { Component, h } from "@stencil/core";

@Component({
  tag: "app-root",
  styleUrl: "app-root.css"
})
export class AppRoot {
  render() {
    return (
      <main class="app-root">
        <app-header></app-header>

        <stencil-router>
          <stencil-route-switch scrollTopOffset={0}>
            <stencil-route url="/" component="app-home" exact={true} />
            <stencil-route url="/profile/:name" component="app-profile" />
          </stencil-route-switch>
        </stencil-router>

        <app-links></app-links>
        <app-footer></app-footer>
      </main>
    );
  }
}
