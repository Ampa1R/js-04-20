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
        }

        xhr.timeout = 15000;

        xhr.ontimeout = () => {
            console.log('timeout');
        };

        xhr.open('GET', url, true);

        xhr.send();
    });
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
    }

    fetchGoods(callback) {
        sendRequest(`${API}/catalogData.json?page=1&sort=price`)
            .then(data => {
                this.goods = data;
                callback()
            }).catch(err => {
                console.log('fetchGoods error status:', err);
            });
    }

    render() {
        let goodsList = '';
        this.goods.forEach(({ product_name, price }) => {
            const goodItem = new GoodsItem(product_name, price);
            goodsList += goodItem.render();
        });
        document.querySelector('.goods-list').innerHTML = goodsList;
    }
}

const list = new GoodsList();
list.fetchGoods(() => list.render());
