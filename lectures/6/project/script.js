const API = 'https://raw.githubusercontent.com/GeekBrainsTutorial/online-store-api/master/responses';


const app = new Vue({
    el: '#app',
    data: {
        goods: [],
        filteredGoods: [],
        searchText: '',
    },
    methods: {
        async sendRequest(url) {
            const res = await fetch(url);
            return res.json();
        },
        filterGoods() {
            const regexp = RegExp(this.searchText, 'i');
            this.filteredGoods = this.goods.filter(({ product_name }) => regexp.test(product_name));
        }
    },
    async mounted() {
        try {
            const goods = await this.sendRequest(`${API}/catalogData.json?page=1&sort=price`);
            this.goods = goods;
            this.filteredGoods = goods;
        } catch (err) {
            console.log('fetchGoods error status:', err);
        }
    },
})
