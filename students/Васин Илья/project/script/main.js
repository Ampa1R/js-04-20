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
        this.filteredGoods = [];
    }

    async fetchGoods() {
        try {
            const goods = await sendRequest(`${API}/catalogData.json?page=1&sort=price`);
            this.goods = goods;
            this.filteredGoods = goods;
        } catch (err) {
            console.log('fetchGoods error status:', err)
        }
    }

    render() {
        let goodslist = '';
        this.filteredGoods.forEach(({id_product, product_name, price}) => {
            const goodItem = new GoodsItem(id_product, product_name, price);
            goodslist += goodItem.render();
        });
        document.querySelector('.goods-list').innerHTML = goodslist;
    }

    filterGoods(value) {
        const regexp = RegExp(value, 'i');
        this.filteredGoods = this.goods.filter(({product_name}) => regexp.test(product_name));
        this.render();
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

(async () => {
    const list = new GoodsList();
    await list.fetchGoods();
    list.render();
    list.fetchGoods(); 
    list.renderTotalPrice();
    
    const input = document.querySelector('.goods-search');
    document.querySelector('.search-button').addEventListener('click', () => {
        const value = input.value;
        list.filterGoods(value);
    });
})();





