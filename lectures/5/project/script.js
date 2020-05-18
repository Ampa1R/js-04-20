const API = 'https://raw.githubusercontent.com/GeekBrainsTutorial/online-store-api/master/responses';

const sendRequest = async (url) => {
    const res = await fetch(url);
    return res.json();
};

class GoodsItem {
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
        this.filteredGoods = [];
    }

    async fetchGoods() {
        try {
            const goods = await sendRequest(`${API}/catalogData.json?page=1&sort=price`);
            this.goods = goods;
            this.filteredGoods = goods;
        } catch (err) {
            console.log('fetchGoods error status:', err);
        }
    }

    render() {
        let goodsList = '';
        this.filteredGoods.forEach(({ product_name, price }) => {
            const goodItem = new GoodsItem(product_name, price);
            goodsList += goodItem.render();
        });
        document.querySelector('.goods-list').innerHTML = goodsList;
    }

    filterGoods(value) {
        const regexp = RegExp(value, 'i');
        this.filteredGoods = this.goods.filter(({ product_name }) => regexp.test(product_name));
        this.render();
    }
}

(async () => {
    const list = new GoodsList();
    await list.fetchGoods();
    list.render();
    
    const input = document.querySelector('.goods-search');
    document.querySelector('.search-button').addEventListener('click', () => {
        const value = input.value;
        list.filterGoods(value);
    });
})();
