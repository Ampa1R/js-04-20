<template>
  <div id="app">
    <Header :searchText="searchText"/>
    <GoodList :goods="filteredGoods" @addItemBasket="addBasket"/>  
  </div>
</template>

<script>
const API = 'https://raw.githubusercontent.com/GeekBrainsTutorial/online-store-api/master/responses';
import GoodList from './components/GoodList.vue';
import Header from './components/Header.vue';

export default {
  name: 'App',
  components: {
    GoodList,
    Header,
  },
  data() {
    return {
      goods: [],
      filteredGoods: [],
      selectedGoods: [],
      searchText: "",
      isVisibleCart: false,
      totalPrice: 0,
    }
  },
  async mounted() {
    try {
      const goods = await this.sendRequest(`${API}/catalogData.json?page=1&sort=price`);
      this.goods = goods;
      this.filteredGoods = goods;
    } catch (err) {
        console.log('fetchGoods error status:', err)
      }
    },
  methods: {
    async sendRequest(url) {
        const res = await fetch(url);
        return res.json();
      },
      filterGoods() {
        const regexp = RegExp(this.searchText, 'i');
        this.filteredGoods = this.goods.filter(({product_name}) => regexp.test(product_name));
      },
      visible() {
        this.isVisibleCart = !this.isVisibleCart;
      },
      addBasket(item) {
        console.log("HEY");
        this.selectedGoods.push(item);
        console.log(item);
      },
      removeFromBasket(item) {
        this.selectedGoods.splice(
        this.selectedGoods.findIndex((i) => i === item), 1);
      },
    },
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: none;
    font-family: 'Kodchasan', sans-serif;
}
#app {
    position: relative;
}
body {
    background: rgb(52,52,55);
    background: rgb(225,230,231);
    background: linear-gradient(246deg, rgba(225,230,231,1) 0%, rgba(250,250,250,1) 0%, rgba(52,52,55,1) 100%, rgba(127,128,126,1) 100%, rgba(52,52,55,1) 100%, rgba(2,0,36,1) 100%, rgba(139,139,143,1) 100%);
height: 100vh;
}


.cart-button {
    display: inline-block;
    font-size: 20px;
    font-weight: 700;
    height: 50px;
    color: rgb(209,209,217);
    text-shadow: 0 -1px 2px rgba(0,0,0,.2);
    text-shadow: 0 -1px 2px rgba(0,0,0,.2);
    padding: .5em 1em;
    outline: none;
    border-radius: 3px;
    text-decoration: none;
    background: linear-gradient(rgb(110,112,120), rgb(81,81,86)) rgb(110,112,120);
    box-shadow:
     0 1px rgba(255,255,255,.2) inset,
     0 3px 5px rgba(0,1,6,.5),
     0 0 1px 1px rgba(0,1,6,.2);
    transition: .2s ease-in-out;
}

.cart-button:hover {
    background: linear-gradient(rgb(126,126,134), rgb(70,71,76)) rgb(126,126,134);
}

.cart-button:active {
    background: linear-gradient(rgb(76,77,82), rgb(56,57,62)) rgb(76,77,82);
    box-shadow:
     0 0 1px rgba(0,0,0,.5) inset,
     0 2px 3px rgba(0,0,0,.5) inset,
     0 1px 1px rgba(255,255,255,.1);
}

.goods-list {
    max-width: 500px;
    margin: 0 auto;
    display: flex;
    justify-content: space-around;
}

.goods-item {
    width: 209px;

}

.basket {
    position: absolute;
    top: 65px;
    left: 90px;
    border: 1px solid black;
    background: rgba(128, 128, 128, 0.3);
    padding: 20px;
}

.basket__goods {
    margin-bottom: 20px;
    color: #F0FFFF;
}

.basket__title {
    color: #ffffff;
    margin-bottom: 10px;
}

.removeButton:hover {
    color: rgb(52,52,55, 0.4);
    background: rgb(255,255,255, 0.6);
}

.total-price {
    font-size: 20px;
    color: rgb(255,255,255, 0.6);
    margin-bottom: 20px;
    color: #2e4a62;
    font-size: 30px;
}

.addButton {
    cursor: pointer;
    display: inline-block;
    color: white;
    font-weight: 700;
    text-decoration: none;
    user-select: none;
    padding: .5em 2em;
    outline: none;
    border: 2px solid;
    border-radius: 1px;
    transition: 0.2s;
    background: rgb(52,52,55, 0.4);
}

h3 {
    color: #b4b7ba;
    font-size: 30px;
    margin-bottom: 20px;
}

p {
    color: #2e4a62;
    font-size: 30px;
    margin-bottom: 10px;
}
</style>
