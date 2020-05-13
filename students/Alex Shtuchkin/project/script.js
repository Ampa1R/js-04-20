function makeGETRequest(url, callback) {
    return new Promise((resolve, reject) => {
        let xhr = new XMLHttpRequest();
        xhr.open("GET", url);
        xhr.onload = () => resolve(callback(xhr.responseText));
        xhr.onerror = () => reject(xhr.statusText);
        xhr.send();
      });
}
class Basket {
    constructor() {
        this.cartGoods = [];
    }
    addToBasket() {
        let toBasket;
        list.goods.forEach(function(item){
          toBasket = {
            title: item.title,
            price: item.price,
          }
        });
        this.cartGoods.push (toBasket);
    } //добавить в корзину
    deleteFromBasket() {
        let fromBasket;
        list.goods.forEach(function(item){
          fromBasket = {
            title: item.title,
            price: item.price,
          }
        });
        this.cartGoods.splice(fromBasket);
    } //удалить
    render() {} //рендер
}
class BasketItem {
    constructor(id, title, price) {
        this.title = title; //название
        this.price = price; //стоимость
    }
    render() {}
}
class GoodsItem {
    constructor(title = 'Товар', price = 'Цена') {
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
          {title: 'Shirt', price: 150},
          {title: 'Socks', price: 50},
          {title: 'Jacket', price: 350},
          {title: 'Shoes', price: 250,},
          ];
    }

    render() {
        let goodsList = '';
        this.goods.forEach(({title, price}) => {
            const goodItem = new GoodsItem(title, price);
            goodsList += goodItem.render();
        });
        document.querySelector('.goods-list').innerHTML = goodsList;
    }
    calcAllGoods() {
        let totalPrice = 0;
        this.goods.forEach((good) => {
            if(good.price !== undefined) {
                totalPrice += good.price;
            }
        });
        let totalGoodsAnswer = "Все товары на сумму $" + totalPrice;
        document.querySelector('.goods-total').innerHTML = totalGoodsAnswer;
    }
}
const list = new GoodsList();
const cart = new Basket();
list.fetchGoods();
list.render();
list.calcAllGoods();
