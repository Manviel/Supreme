import { Component, h, State } from "@stencil/core";

const slides = [
  {
    src: "../../assets/img/1.jpg",
    alt: "1"
  },
  {
    src: "../../assets/img/2.jpg",
    alt: "2"
  },
  {
    src: "../../assets/img/3.jpg",
    alt: "3"
  }
];

@Component({
  tag: "app-profile",
  styleUrl: "app-profile.css"
})
export class AppProfile {
  @State() active: number = 1;

  handleClick(value) {
    this.active = value;
  }

  handleNext() {
    if (this.active < slides.length) {
      this.active += 1;
    } else {
      this.active = 1;
    }
  }

  handlePrev() {
    if (this.active > 1) {
      this.active -= 1;
    } else {
      this.active = 3;
    }
  }

  render() {
    const current = slides.filter(s => parseInt(s.alt) === this.active);

    return (
      <article class="width">
        <section class="slider">
          {current.map(s => (
            <div class="slide">
              <img src={s.src} alt={s.alt} class="width" />
            </div>
          ))}
          <aside class="buttons flex space">
            <button class="control" onClick={() => this.handlePrev()}>
              &lt;
            </button>
            <button class="control" onClick={() => this.handleNext()}>
              &gt;
            </button>
          </aside>
        </section>

        <div class="flex indicators align">
          {slides.map(s => (
            <span
              class={parseInt(s.alt) === this.active ? "active dot" : "dot"}
              onClick={() => this.handleClick(parseInt(s.alt))}
            ></span>
          ))}
        </div>
      </article>
    );
  }
}
