class Basket {
    constructor() {
        this.addGoods = [];
        this.deletedGoods = [];
    }
    addToBasket() {} //добавить
    deleteFromBasket() {} //удалить
    calcBasket() {} //подсчет
    isOrder() {} //заказать
    render() {} //рендер
    openBasket() {} //открыть корзину
}
class BasketItem {
    constructor(title, price) {
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
                console.log(good.price);
            }
        });
        let totalGoodsAnswer = "Все товары на сумму $" + totalPrice;
        document.querySelector('.goods-total').innerHTML = totalGoodsAnswer;
    }
}
const list = new GoodsList();
list.fetchGoods();
list.render();
list.calcAllGoods(); // для ДЗ2
