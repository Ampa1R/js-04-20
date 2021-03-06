<template>
  <div id="app">
    <Header>
      <Search
        :searchText="searchText"
        @searchTextChange="searchText = $event"
      />
      <Cart :items="cartItems" @removeItem="handleRemoveItem" />
    </Header>
    <GoodsList :goods="filteredGoods" @itemClick="handleItemClick" />
  </div>
</template>

<script>
import GoodsList from "./components/GoodsList.vue";
import Header from "./components/Header.vue";
import Search from "./components/Search.vue";
import Cart from "./components/Cart.vue";
import eventBus from './EventBus';

const API = "http://localhost:3000/api";

export default {
  name: "App",
  components: {
    GoodsList,
    Header,
    Search,
    Cart,
  },
  data() {
    return {
      goods: [],
      searchText: "",
      cartItems: [],
    };
  },
  mounted() {
    this.fetchCatalog();
    this.fetchCart();
  },
  methods: {
    async sendRequest(url, options) {
      const res = await fetch(`${API}${url}`, options);
      return res.json();
    },
    async handleItemClick(item) {
      eventBus.$emit('item-click', item);
      try {
        const cart = await this.sendRequest('/addToCart', {
          method: 'POST',
          body: JSON.stringify(item),
          headers: {
            'Content-Type': 'application/json',
          }
        });
        this.cartItems = cart;
      } catch (err) {
        console.log("addToCart error status:", err);
      }
    },
    async handleRemoveItem(id) {
      try {
        const cart = await this.sendRequest('/removeFromCart', {
          method: 'DELETE',
          body: JSON.stringify({ id }),
          headers: {
            'Content-Type': 'application/json',
          }
        });
        this.cartItems = cart;
      } catch (err) {
        console.log("removeFromCart error status:", err);
      }
    },
    async fetchCatalog() {
      try {
        const goods = await this.sendRequest('/catalog');
        this.goods = goods;
      } catch (err) {
        console.log("fetchCatalog error status:", err);
      }
    },
      async fetchCart() {
      try {
        const cart = await this.sendRequest('/cart');
        this.cartItems = cart;
      } catch (err) {
        console.log("fetchCart error status:", err);
      }
    },
  },
  computed: {
    filteredGoods() {
      const regexp = RegExp(this.searchText, "i");
      return this.goods.filter(({ product_name }) => regexp.test(product_name));
    },
  },
};
</script>

<style>
*,
*::after,
*::before {
  box-sizing: border-box;
}

body {
  margin: 0;
  font-family: "Montserrat", -apple-system, BlinkMacSystemFont, "Segoe UI",
    "Roboto", "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans",
    "Helvetica Neue", sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  background-color: #f9fafc;
}

.cart-button {
  border: none;
  border-radius: 20px;
  padding: 7px 20px;
  background: #0b5bb8;
  font-size: 16px;
  font-weight: 600;
  font-family: inherit;
  cursor: pointer;
  color: #fff;
}

.cart-button:focus {
  outline: none;
  background: #0c50a0;
}

.cart-button:hover {
  background: #3b7eb9;
}
</style>
