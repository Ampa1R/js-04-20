class Hamburger {
  constructor(size, stuffing) {
  	this.calories = size.calories + stuffing.calories;
  	this.price = size.price + stuffing.price;
  	this.size = size.name;
  	this.stuffing = stuffing.name;
  	this.topping = [];
  }

  addTopping(topping) {    // Добавить добавку
  	this.calories += topping.calories;
  	this.price += topping.price;
  	this.topping.push(topping.name);
  }

  removeTopping(topping) { // Убрать добавку 
  	while (this.topping.includes(topping.name)) {
  		this.topping.splice(this.topping.findIndex(item => item === topping.name), 1);
  		this.calories -= topping.calories;
  		this.price -= topping.price;
  	}
  	myHamburger.getFullInfo();
  	console.log(`В составе гамбургера больше нет или никогда не было добавки ${topping.name}.`);
  }

  getFullInfo() {   // Получить список добавок 
  	console.log(`Вы выбрали ${this.size} гамбургер, с начинкой: ${this.stuffing}.`);
  	if (this.topping.length) {
  		console.log(`Опциональная добавка: ${this.topping.join(', ')}.`);
  	}
  	console.log(`Калорийность гамбургера составила: ${this.calories} калорий, цена: ${this.price} рублей.`);
  }
}

class HamburgerComponent {
	constructor(name, price, calories) {
		this.name = name;
		this.price = price;
		this.calories = calories;
	}
}

// Создаем экземпляры с размерами гамбургеров

const sizeBig = new HamburgerComponent('большой', 100, 40);
const sizeSmall = new HamburgerComponent('маленький', 50, 20);

// Создаем экземпляры с начинкой гамбургеров

const stuffingChees = new HamburgerComponent('сыр', 10, 20);
const stuffingSalad = new HamburgerComponent('салат', 20, 5);
const stuffingPotato = new HamburgerComponent('картофель', 15, 10);

// Создаем экземпляры с дополнением к гамбургерам

const toppingSpice = new HamburgerComponent('приправа', 15, 0);
const toppingMayo = new HamburgerComponent('майонез', 20, 5);

// Создаем наш гамбургер

const myHamburger = new Hamburger(sizeBig, stuffingChees);
myHamburger.addTopping(toppingSpice);
myHamburger.addTopping(toppingMayo);
myHamburger.getFullInfo();
myHamburger.removeTopping(toppingSpice);