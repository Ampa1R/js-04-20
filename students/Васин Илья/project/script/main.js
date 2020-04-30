const goods = [
    {title: 'Shirt', price: 100},
    {title: 'Socks', price: 50},
    {title: 'Jacket', price: 200},
    {title: 'Shoes', price: 300},
];

//Для сокращения записи функции можно использовать стрелочную функцию

const getGoodsItem = (title, price) => `<div class ="goods-item"><div class ="goods-pic"></div><h3>${title}</h3><p>${price}</p></div>`;

/**
Запятые возникают, потому что для перебора массива использовался метод map, который перебирает массив, применяет функцию к каждому элементу массива и возвращает новый массив
Чтобы это исправить, нужно использовать метод forEach, он так же перебирает массив и применяет функцию к каждому элементу, но новый массив не возвращает.
Таким образом мы избавимся от запятых.
 */
const renderGoodsList = list => {
    list.forEach(item => document.querySelector('.goods-list').innerHTML += getGoodsItem(item.title, item.price));
}

renderGoodsList(goods);