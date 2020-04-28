const goods = [
    { title: 'Shirt', price: 100 },
    { title: 'Socks', price: 50 },
    { title: 'Jacket', price: 200 },
    { title: 'Shoes', price: 300 },
];

	// Можно сократить при помощи стрелочной функции

const getGoodsItem = (title, price) =>
	`<div class="goods-item"><h3>${title}</h3><p>${price}</p></div>`;

const renderGoodsList = (list = [{title: 'Item Title', price: 0}]) => 
 	list.forEach(item => document.querySelector('.goods-list').innerHTML += getGoodsItem(item.title, item.price));

 /*{
    const goodsList = list.map(item => getGoodsItem(item.title, item.price));

    // document.querySelector('.goods-list').innerHTML = goodsList;
    // Выводим в html массив goodsList в котором после каждого элемента
    // находится запятая. Отсюда и запятые на странице.
    // Решается последовательным выводом элементов.

    goodsList.forEach(element => document.querySelector('.goods-list').innerHTML += element);
}*/

renderGoodsList(goods);
