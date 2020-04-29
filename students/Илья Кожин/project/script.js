const goods = [
    { title: 'Shirt', price: 100 },
    { title: 'Socks', price: 50 },
    { title: 'Jacket', price: 200 },
    { title: 'Shoes', price: 300 },
];

const getGoodsItem = (title, price) => {
    return `<div class="goods-item">
                <h3>${title}</h3>
                <p class="price">${price}</p>
            </div>`;
};

const renderGoodsList = (list = goods) => {
    const goodsList = list.map(item => getGoodsItem(item.title, item.price));
    document.querySelector('.goods-list').innerHTML = goodsList.join("");
}

renderGoodsList();
