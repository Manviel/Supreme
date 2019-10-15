import { Component, h, State } from "@stencil/core";

const cards = [
  {
    src: "../../assets/img/ph1.png",
    status: "new",
    title: "Only Skinny Jeans",
    price: "65.50"
  },
  {
    src: "../../assets/img/ph2.png",
    status: "new",
    title: "Neck Knitted Jumper",
    price: "76.25"
  },
  {
    src: "../../assets/img/ph3.png",
    status: "old",
    title: "Turtle Neck Jumper in Rib",
    price: "130.25"
  },
  {
    src: "../../assets/img/ph4.png",
    status: "old",
    title: "With Pathwork Crochet",
    price: "80.60"
  }
];

const more = [
  {
    src: "../../assets/img/ph5.png",
    status: "new",
    title: "Levi's Jeans",
    price: "85.75"
  },
  {
    src: "../../assets/img/ph6.png",
    status: "new",
    title: "Boyfriend T-Shirt with Bohemian print",
    price: "120"
  },
  {
    src: "../../assets/img/ph7.png",
    status: "old",
    title: "Colour Block",
    price: "550.5"
  },
  {
    src: "../../assets/img/ph8.png",
    status: "old",
    title: "Monki Festival Knitted",
    price: "24.75"
  },
  {
    src: "../../assets/img/ph9.png",
    status: "old",
    title: "Oversized Cardigan",
    price: "90"
  },
  {
    src: "../../assets/img/ph10.png",
    status: "old",
    title: "Paul & Joe Sister Jumper with Neon Trims",
    price: "19.75"
  },
  {
    src: "../../assets/img/ph11.png",
    status: "old",
    title: "Only Busted Knee Jean",
    price: "140.5"
  },
  {
    src: "../../assets/img/ph12.png",
    status: "old",
    title: "Boyfriend T-Shirt with Paris Print",
    price: "84.25"
  }
];

@Component({
  tag: "app-catalog",
  styleUrl: "app-catalog.css"
})
export class AppCatalog {
  @State() isLoading: boolean = false;

  handleShow() {
    this.isLoading = !this.isLoading;
  }

  render() {
    return (
      <div class="flex col">
        <h4 class="px-16 bold">Fashion</h4>

        <article class="flex space">
          {cards.map(c => (
            <app-card
              src={c.src}
              status={c.status}
              title={c.title}
              price={c.price}
            />
          ))}
        </article>

        <article class="flex align col">
          <h2 class="bold">
            Last weekend <span class="red">extra 50%</span> off on all reduced
            boots and shoulder bags
          </h2>
          <i class="ban">
            This offer is valid in-store and online. Prices displayed reflect
            this additional disount. This offer ends at 11:59 GMT on March 1st
            2015
          </i>
        </article>

        <div class="flex all">
          <button class="btn large bold" onClick={() => this.handleShow()}>
            Show more
          </button>
        </div>

        {this.isLoading && (
          <article class="flex space cards">
            {more.map(c => (
              <app-card
                src={c.src}
                status={c.status}
                title={c.title}
                price={c.price}
              />
            ))}
          </article>
        )}

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
              <img
                src="../../assets/img/repair.png"
                alt="Repair"
                class="high"
              />
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
      </div>
    );
  }
}
