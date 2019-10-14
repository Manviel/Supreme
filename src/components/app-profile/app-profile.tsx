import { Component, h } from "@stencil/core";

@Component({
  tag: "app-profile",
  styleUrl: "app-profile.css"
})
export class AppProfile {
  render() {
    return (
      <article class="app-profile width">
        <section class="slider">
          <div class="slide first">
            <a href="./catalog.html">
              <img src="../../assets/img/1.jpg" alt="1" class="width" />
            </a>
          </div>
          <div class="slide">
            <a href="./item.html">
              <img src="../../assets/img/2.jpg" alt="2" class="width" />
            </a>
          </div>
          <div class="slide">
            <a href="./catalog.html">
              <img src="../../assets/img/3.jpg" alt="3" class="width" />
            </a>
          </div>
          <aside class="buttons flex space">
            <button class="control" id="prev">
              &lt;
            </button>
            <button class="control" id="next">
              &gt;
            </button>
          </aside>
        </section>

        <div class="flex indicators cent align border-bottom">
          <span class="dot"></span>
          <span class="dot"></span>
          <span class="dot"></span>
        </div>
      </article>
    );
  }
}
