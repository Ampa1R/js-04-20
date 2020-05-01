const goods = [
    { title: 'Shirt', price: 100 },
    { title: 'Socks', price: 50 },
    { title: 'Jacket', price: 200 },
    { title: 'Shoes', price: 300 },
    {}
];

const getGoodsItem = ({ title = 'Товар', price = 0 }) =>
    `<div class="goods-item"><h3>${title}</h3><p>${price}</p></div>`;

const renderGoodsList = (list) =>
    (document.querySelector('.goods-list').innerHTML = list
        .map((item) => getGoodsItem({ title: item.title, price: item.price }))
        .join(' '));

renderGoodsList(goods);
