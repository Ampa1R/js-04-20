<template>
  <div id="app">
    <Item v-for="item in items" :key="item.product_name" :item="item" @itemClick="onItemClick" />
  </div>
</template>

<script>
import Item from './components/Item.vue';

export default {
  name: 'App',
  components: {
    Item
  },
  data() {
    return {  
      items: [
        {
            product_name: 'Компьютер',
            price: '1000',
        },
        {
            product_name: 'Мышь',
            price: '100',
        }
      ]
    }
  },
  methods: {
    onItemClick(name) {
      console.log('Item Click!', name);
    }
  },
  computed: {
    firstItem() {
      return this.items[0];
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
  margin-top: 60px;
}
</style>
