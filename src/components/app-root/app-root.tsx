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
            <stencil-route url="/profile" component="app-profile" />
            <stencil-route url="/bag" component="app-bag" />
            <stencil-route url="/catalog" component="app-catalog" />
            <stencil-route url="/detail" component="app-detail" />
          </stencil-route-switch>
        </stencil-router>

        <app-links></app-links>
        <app-footer></app-footer>
      </main>
    );
  }
}
