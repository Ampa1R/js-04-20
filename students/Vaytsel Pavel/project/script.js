const API = 'https://raw.githubusercontent.com/GeekBrainsTutorial/online-store-api/master/responses';

const sendRequest = (url) => {
    return new Promise((resolve, reject) => {
        let xhr = new XMLHttpRequest();

        xhr.onreadystatechange = () => {
            if (xhr.readyState === 4) {
                if (xhr.status === 200) {
                    resolve(JSON.parse(xhr.responseText));
                } else {
                    // console.log('200 !==', xhr.status);
                    reject(xhr.status);
                }
            }
        };

        xhr.timeout = 15000;

        xhr.ontimeout = () => {
            console.log('timeout');
        };

        xhr.open('GET', url, true);

        xhr.send();
    });
};

class GoodsItem {
    constructor(id, title, price) {
        this.id = id;
        this.title = title;
        this.price = price;
    }

    async addToBasket() {
        await sendRequest(`${API}/addToBasket.json?data=${this.id}`);
    }
    async deleteFromBasket() {
        await sendRequest(`${API}/deleteFromBasket.json?data=${this.id}`);
    }

    render() {
        return `<div class="goods-item"><h3>${this.title}</h3><p>${this.price}</p></div>`;
    }
}

class GoodsList {
    constructor() {
        this.goods = [];
    }

    async fetchGoods() {
        await sendRequest(`${API}/catalogData.json?page=1&sort=price`)
            .then((data) => {
                this.goods = data;
            })
            .catch((err) => {
                console.log('fetchGoods error status:', err);
            });
    }

    getTotalPrice() {
        return this.goods.reduce((total, item) => total + item.price, 0);
    }

    render() {
        let goodsList = '';
        this.goods.forEach(({ id_product, product_name, price }) => {
            const goodItem = new GoodsItem(id_product, product_name, price);
            goodsList += goodItem.render();
        });
        document.querySelector('.goods-list').innerHTML = goodsList;
    }
}

const list = new GoodsList();
list.fetchGoods().then(() => list.render());

class Basket {
    constructor() {}

    async getBasket() {
        await sendRequest(`${API}/getBasket.json`);
    }
}
class BasketItem extends GoodsItem {
    constructor() {
        super();
    }
}