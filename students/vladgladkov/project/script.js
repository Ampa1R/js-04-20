const API = 'https://raw.githubusercontent.com/GeekBrainsTutorial/online-store-api/master/responses';

const getCatalogAPI = '/catalogData.json';
const getBasketAPI = '/getBasket.json';
const addBascketAPI = '/addToBasket.json';
const deleteBasketAPI = '/deleteFromBasket.json';

const button = document.querySelector('.cart-button');
const cartContent = document.querySelector('.cart-content');

button.addEventListener('click', (evt) => {
	cartContent.classList.toggle('active');
});

const sendRequest = async (url) => {
	const res = await fetch(url);
	return res.json();
}

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
	constructor(basket) {
		this.goods = [];
		this.filteredGoods = [];
		this.basket = basket;
	}

	async fetchGoods(APIMethod) {
		try {
			const goods = await sendRequest(API + APIMethod);
			this.goods = goods;
			this.filteredGoods = goods;
			this.render();
		} catch (err) {
			console.log(`Server status respond: ${err}`);
		}
	}

	render() {
		let listHtml = '';
		this.filteredGoods.forEach(({product_name, price}) => {
			const goodItem = new GoodItem(product_name, price);
			listHtml += goodItem.render();
		});
		document.querySelector('.goods-list').innerHTML = listHtml;
		
		// Добавляем обработчик клика всем элементам списка товаров.
		// Допустим ли такой вариант? Или лучше будет после рендера элементов
		// передать их в глобальную область видимости и добавлять обработчик там?

		let goodItems = document.querySelectorAll('.goods-item');
		for (let goodItem of goodItems) {
			goodItem.addEventListener('click', evt => this.basket.changeBasket(addBascketAPI, 'Товар добавлен в корзину!'));
				// Вопрос выше возник так как здесь мы используем метод одного класса в методе другого
				// Насколбко это допустимая практика?
		}
	}

	filterGoods(value) {
		const regexp = RegExp(value, 'i');
		this.filteredGoods = this.goods.filter(({ product_name }) => regexp.test(product_name));
		this.render();
  }
}

class GoodsCart extends GoodsList {
	render() {
		let listHtml = '';
		this.goods.contents.forEach(({product_name, price}) => {
			listHtml += `<div class="cart-item"><h3>${product_name}</h3><span>${price}</span><div class="del"></div></div>`;
		});
		listHtml += `<div class="cart-total-container">
					<div class="cart-total"><h3>Всего товаров:</h3><span>${this.goods.countGoods} ед.</span></div>
					<div class="cart-total"><h3>На сумму:</h3><span>${this.goods.amount} Р.</span></div>
					</div>`
		cartContent.innerHTML = listHtml;

		let cartItems = document.querySelectorAll('.cart-item .del');
		for (let cartItem of cartItems) {
			cartItem.addEventListener('click', evt => this.changeBasket(deleteBasketAPI, 'Товар удален из корзины!'));
		}
	}

	async changeBasket(APIMethod, popupMsg) {
		let success = await sendRequest(API + APIMethod);
		try {
			if (success.result) {
				// Должен еще быть какой-то метод позволяющий изменять состав корзины на сервере, которого нет в тренировочном API
				this.fetchGoods(getBasketAPI);
				this.showPopup(popupMsg);
			} else this.showPopup('Ошибка при выполнении операции.');
		} catch {
			this.showPopup('Ошибка сервера, попробуйте позднее.');
		}
	}

	showPopup (popupMsg) {
		const popup = document.querySelector('.popup');
		popup.textContent = popupMsg;
		popup.classList.add('active');
		setTimeout(() => popup.classList.remove('active'), 1500);
	}
}

const basket = new GoodsCart();
const list = new GoodsList(basket);

list.fetchGoods(getCatalogAPI);
basket.fetchGoods(getBasketAPI);

const input = document.querySelector('.goods-search');
document.querySelector('.search-button').addEventListener('click', () => list.filterGoods(input.value));

// (async () => {
// 	const list = new GoodsList();
// 	await list.fetchGoods();
// 	list.render();
	
// 	const input = document.querySelector('.goods-search');
// 	document.querySelector('.search-button').addEventListener('click', () => {
// 		 const value = input.value;
// 		 list.filterGoods(value);
// 	});
// })();