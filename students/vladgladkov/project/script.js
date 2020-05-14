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

const sendRequest = (url) => {
	return new Promise((resolve, reject) => {
	let xhr = new XMLHttpRequest;

	xhr.onreadystatechange = () => {
		if (xhr.readyState === 4) {
			if (xhr.status === 200) {
				resolve(JSON.parse(xhr.responseText));
			} else {
				reject(xhr.status);
			}
		}
	}

	xhr.open('GET', url, true);
	xhr.send();
	});
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
	constructor() {
		this.goods = [];
	}

	fetchGoods(APIMethod) {
		return new Promise((resolve) =>
			sendRequest(`${API}${APIMethod}`)
			.then(goods => {
				this.goods = goods;
				resolve(this.goods);
			})
			.catch(err => {
				console.log(`Server status respond: ${err}`);
			})
		);
	}

	render() {
		let listHtml = '';
		this.goods.forEach(({product_name, price}) => {
			const goodItem = new GoodItem(product_name, price);
			listHtml += goodItem.render();
		});
		document.querySelector('.goods-list').innerHTML = listHtml;
		
		let goodsItem = document.querySelectorAll('.goods-item');
		for (let goodItem of goodsItem) {
			goodItem.addEventListener('click', (evt) => {
				console.log('click');
				basket.addToBasket(addBascketAPI)
				.then(() => {
					document.querySelector('.popup').classList.add('active');
					setTimeout(() => {
						document.querySelector('.popup').classList.remove('active');
					}, 1500);
					basket.render();
				})
				.catch(() => console.log('Some error'))
			});
		}
	}

	getTotalPrice() {
		this.totalPrice = 0;
		this.goods.forEach(({price}) => this.totalPrice += price);
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
	}

	 addToBasket(APIMethod) {
		// Здесь должен быть POST или PATCH запрос к API на добавление товара в корзину в списке на сервере
		// в методе XMLHttpRequest.send() в реальности должно предаваться что-то типа объекта JSON,
		// который на серверной части будет записан в список корзины, чтобы потом получить этот список через API?
		// Так как в ответе нам приходит что-то типа булевого значения с результатами подтверждения выполнения операции
		// Логичнее написать другой метод для запроса, а не использовать имеющийся sendRequest, который будет отправлять и POST
		// и к тому же в нем необходимо проверять ответ пришедщй в GET?
		// Это же относится и к методу для удаления из корзины.

		return new Promise((resolve, reject) => {
			sendRequest(`${API}${APIMethod}`)
			.then (isSuccess => isSuccess.result ? resolve() : reject())
		});
	}
}

const list = new GoodsList();
const basket = new GoodsCart();

list.fetchGoods(getCatalogAPI)
.then(() => list.render());
basket.fetchGoods(getBasketAPI)
.then(() => basket.render());