class GoodsItem { 
    constructor(title, price) {
        this.title = title;
        this.price = price;
    }
    render() {
        return `<div class ="goods-item"><div class ="goods-pic"></div><h3>${this.title}</h3><p>${this.price}</p></div>`;
    }
}

class GoodsList {
    constructor () {
        this.goods = [];
    }

    getGoods() {
        this.goods = [
            {title: 'Shirt', price: 100},
            {title: 'Socks', price: 50},
            {title: 'Jacket', price: 200},
            {title: 'Shoes', price: 300},
        ] 
    }

    renderGoodsList() {
        let list = '';
        this.goods.forEach(({title, price}) => {
            const goodItem = new GoodsItem(title, price);
            list += goodItem.render();
        });
        document.querySelector('.goods-list').innerHTML = list;
    }

    getTotalPrice() {
        
        this.totalPrice = 0;
        this.goods.forEach(({price}) => this.totalPrice +=price);
    }

    renderTotalPrice() {
        document.querySelector('.total-price').innerHTML = this.totalPrice;
    }
}

const goodsList = new GoodsList();
goodsList.getGoods();
goodsList.renderGoodsList();
goodsList.getTotalPrice();
goodsList.renderTotalPrice();

//Другие классы
/*
class RemoveFromBasket - удаляет отдельные товары
class TotalBasket - после клика на товар, он добавляется к корзину
class Order - сделать заказ
class Basket - просмотр корзины


*/
