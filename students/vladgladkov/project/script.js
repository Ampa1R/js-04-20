const API = 'https://raw.githubusercontent.com/GeekBrainsTutorial/online-store-api/master/responses';

const app = new Vue ({
	el: '#app',
	data: {
		goods: [],
		filteredGoods: [],
		searchText: '',
		cartGoods: [],
		isVisibleCart: false,
	},
	methods: {
		async sendRequest(url) {
		 	const res = await fetch(url);
		 	return res.json();
		},
		async showCart() {
			const cartGoods = await this.sendRequest(API + '/getBasket.json');
			this.cartGoods = cartGoods;
			this.isVisibleCart ? this.isVisibleCart = false : this.isVisibleCart = true;
		},
		async changeCart(APIMethod, popupMsg) {
			try {
				let success = await this.sendRequest(API + APIMethod);
				if (success.result) {
					this.showPopup(popupMsg);
				} else this.showPopup('Ошибка при выполнении операции.');
			} catch {
				this.showPopup('Ошибка сервера, попробуйте позднее.');
			}
		},
		showPopup (popupMsg) {
			const popup = document.querySelector('.popup');
			popup.textContent = popupMsg;
			popup.classList.add('active');
			setTimeout(() => popup.classList.remove('active'), 1500);
				},
	},
	computed: {
		filterGoods() {
			const regexp = RegExp(this.searchText, 'i');
			this.filteredGoods = this.goods.filter(({ product_name }) => regexp.test(product_name));
			return this.filteredGoods;
		},
	},
	async mounted() {
		try {
			const goods = await this.sendRequest(API + '/catalogData.json');
			const cartGoods = await this.sendRequest(API + '/getBasket.json');
			this.cartGoods = cartGoods;
			this.goods = goods;
			this.filteredGoods = goods;

		} catch (err) {
			console.log(`Server status respond: ${err}`);
		}
	},
});