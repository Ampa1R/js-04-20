class GoodItem {
	constructor(title, price) {
		this.title = title;
		this.price = price;
	}

	render() {
		return `<div class="goods-item"><h3>${this.title}</h3><p>${this.price}</p></div>`;
	}
}

class GoodsList {
	constructor() {
		this.goods = [];
	}

	fetchGoods() {
		this.goods = [
    		{ title: 'Shirt', price: 100 },
    		{ title: 'Socks', price: 50 },
    		{ title: 'Jacket', price: 200 },
    		{ title: 'Shoes', price: 300 },
		];
	}

	render() {
		let listHtml = '';
		this.goods.forEach(({title, price}) => {
			const goodItem = new GoodItem(title, price);
			listHtml += goodItem.render();
		});
		document.querySelector('.goods-list').innerHTML = listHtml;
	}

	getTotalPrice() {
		this.totalPrice = 0;
		this.goods.forEach(({price}) => this.totalPrice += price);
	}
}

class GoodsCart extends GoodsList{
	// С переопределенным методом fetchGoods(), методом для очистки корзины и методом для оформления
}

class CartItem extends GoodItem {
	// С переопределенным методом render() и методом для удаления текущего элемента
}

const list = new GoodsList();
list.fetchGoods();
list.render();