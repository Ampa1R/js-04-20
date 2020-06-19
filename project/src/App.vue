<template>
  <div id="app">
    <Header >
      <Search :searchText="searchText" @searchTextChange="searchText = $event"/>
      <Cart :items="cartItems" @remove="handleRemoveItem" :total="totalPrice"/>
    </Header>
    <GoodList :goods="filteredGoods" @itemClick="handleItemClick"/>  
  </div>
</template>

<script>
const API = "http://localhost:3000/api";

import GoodList from './components/GoodList.vue';
import Header from './components/Header.vue';
import Search from './components/Search.vue';
import Cart from './components/Cart.vue';

export default {
  name: 'App',
  components: {
    GoodList,
    Header,
    Search,
    Cart,
  },
  data() {
    return {
      goods: [],
      cartItems: [],
      searchText: "",
      isVisibleCart: false,
      totalPrice: 0,
    }
  },
  async mounted() {
    try {
      const goods = await this.sendRequest(`${API}/catalog`);
      this.goods = goods;
    } catch (err) {
        console.log('fetchGoods error status:', err)
      }
    },
  methods: {
    async sendRequest(url) {
        const res = await fetch(url);
        return res.json();
      },
      visible() {
        this.isVisibleCart = !this.isVisibleCart;
      },
      handleItemClick(item) {

        this.cartItems.push(item);
      },
      handleRemoveItem(id) {
        
        this.cartItems.splice(
        this.cartItems.findIndex((i) => i === id), 1)
      },
    },
    computed: {
      filteredGoods() {
        const regexp = RegExp(this.searchText, 'i');
        return this.goods.filter(({product_name}) => 
          regexp.test(product_name));
      },
      calcPrice() {
          this.cartItems.forEach(({price}) => this.totalPrice +=price);
          return this.totalPrice;
      }
    }
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
    flex-wrap: wrap;
}

.item {
  margin: 0px 10px 10px 10px;
}

.goods-item {
    max-width: 209px;
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