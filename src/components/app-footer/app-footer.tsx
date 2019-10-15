import { Component, h } from "@stencil/core";

@Component({
  tag: "app-footer",
  styleUrl: "app-footer.css"
})
export class AppFooter {
  render() {
    return (
      <footer class="flex space align">
        <h6>&copy; 2010-2015, The Template Group inc.</h6>
        <h3 class="bold">
          Share
          <span class="share px-12">1437</span>
        </h3>
        <section class="flex space">
          <h6 class="bold px-12 foot">Legal notice</h6>
          <h6 class="bold px-12 foot">Privacy policy</h6>
          <h6 class="bold px-12">Site map</h6>
        </section>
      </footer>
    );
  }
}
