const API = 'https://raw.githubusercontent.com/GeekBrainsTutorial/online-store-api/master/responses';

const sendRequest = (url) => {
    return new Promise((resolve, reject) => {
        let xhr = new XMLHttpRequest();

        xhr.onreadystatechange = () => {
            if (xhr.readyState === 4) {
                if (xhr.status === 200) {
                    resolve(JSON.parse(xhr.responseText));
                } else {
                    reject(xhr.status);
                }
            }
        };

        xhr.timeout = 15000;

        xhr.ontimeout = () => {
            console.log('timeout');
        };

        xhr.open('Get', url, true);

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
        return `<div class ="goods-item"><h3>${this.title}</h3><p>${this.price}</p></div>`;
    }

}

class GoodsList {
    constructor () {
        this.goods = [];
    }

    async fetchGoods() {
        await sendRequest(`${API}/catalogData.json?page=1&sort=price`)
            .then((data) => {
                this.goods = data;
            })
            .catch((err) => {
                console.log('fetchGoods error status:', err)
            })
    }

    render() {
        let goodslist = '';
        this.goods.forEach(({id_product, product_name, price}) => {
            const goodItem = new GoodsItem(id_product, product_name, price);
            goodslist += goodItem.render();
        });
        document.querySelector('.goods-list').innerHTML = goodslist;
    }

    renderTotalPrice() {
        this.totalPrice = 0;
        this.goods.forEach(({price}) => this.totalPrice +=price);
        document.querySelector('.total-price').innerHTML = this.totalPrice;
    }
}

class Basket {
    constructor() {
        this.goodsC = []
    }
//Добавить в корзину
    addToBasket() {
        let toBasket;
        list.goods.forEach(function(item){
        toBasket = {
            title: item.title,
            price: item.price,
        }
        });
        this.goodsC.push (toBasket);
    } 
//Удалить
    deleteFromBasket() {
        let fromBasket;
        list.goods.forEach(function(item){
        fromBasket = {
            title: item.title,
            price: item.price,
        }
        });
        this.goodsC.splice(fromBasket);
    } 
}

const list = new GoodsList();
list.fetchGoods().then(() => list.render());
list.fetchGoods().then(() => list.renderTotalPrice());



