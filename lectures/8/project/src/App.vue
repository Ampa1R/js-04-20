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
  async mounted() {
    try {
      const goods = await this.sendRequest(`${API}/catalog`);
      this.goods = goods;
    } catch (err) {
      console.log("fetchGoods error status:", err);
    }
  },
  methods: {
    async sendRequest(url) {
      const res = await fetch(url);
      return res.json();
    },
    handleItemClick(item) {
      const itemIndex = this.cartItems.findIndex(
        ({ id_product }) => id_product === item.id_product
      );
      if (itemIndex !== -1) {
        this.cartItems[itemIndex].quantity += 1;
      } else {
        this.cartItems.push({ ...item, quantity: 1 });
      }
    },
    handleRemoveItem(id) {
      this.cartItems = this.cartItems.filter(
        ({ id_product }) => id_product !== id
      );
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
