const menu = {
  types: {
    small: { w: 20, price: 50 },
    big: { w: 40, price: 100 },
  },
  toppings: {
    cheese: { w: 10, price: 20 },
    salad: { w: 5, price: 20 },
    potato: { w: 10, price: 15 },
    flavouring: { w: 0, price: 15 },
    mayo: { w: 20, price: 5 },
  },
};

class Hamburger {
  #toppings = [];

  constructor(size, stuffing) {
    this.size = size;
    this.#toppings.push(...stuffing);
  }

  addTopping(topping) {
    if (!Object.keys(menu.toppings).includes(topping))
      return console.log(`Нельзя добавить ${topping}.`);

    this.#toppings.push(topping);
  }
  removeTopping(topping) {
    this.#toppings.splice(
      this.#toppings.findIndex((i) => i === topping),
      1
    );
  }
  getToppings() {
    console.log(this.#toppings);
  }
  getSize() {
    console.log(this.size);
  }
  calculatePrice() {
    const toppingsTotalPrice = this.#toppings.reduce(
      (total, i) => menu.toppings[i].price + total,
      0
    );
    console.log(`Цена: ${menu.types[this.size].price + toppingsTotalPrice}`);
  }
  calculateCalories() {
    const toppingsTotalCalories = this.#toppings.reduce(
      (total, i) => menu.toppings[i].w + total,
      0
    );
    console.log(
      `Калорийность: ${menu.types[this.size].w + toppingsTotalCalories}`
    );
  }
}

const ham = new Hamburger("small", ["potato", "salad"]);
ham.addTopping("cheese");
ham.addTopping("flavouring");
ham.addTopping("mayo");
ham.removeTopping("mayo");
ham.getToppings();
ham.calculatePrice();
ham.calculateCalories();
