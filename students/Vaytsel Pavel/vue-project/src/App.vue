<template>
    <div id="app">
        <Header />
        <GoodsList :goods="filteredGoods" />
        <Error v-if="errorMsg.length" :msg="errorMsg" />
    </div>
</template>

<script>
import GoodsList from './components/GoodsList.vue';
import Header from './components/Header.vue';
import Error from './components/Error';

const API = 'https://raw.githubusercontent.com/GeekBrainsTutorial/online-store-api/master/responses';

export default {
    name: 'App',
    components: {
        GoodsList,
        Header,
        Error
    },
    data() {
        return {
            goods: [],
            filteredGoods: [],
            searchText: '',
            errorMsg: ''
        };
    },
    async mounted() {
        try {
            const goods = await this.sendRequest(`${API}/catalogData.json?page=1&sort=price`);
            this.goods = goods;
            this.filteredGoods = goods;
        } catch (err) {
            this.errorMsg = `fetchGoods error status: ${err})`;
        }
    },
    methods: {
        async sendRequest(url) {
            const res = await fetch(url);
            return res.json();
        },
        filterGoods() {
            const regexp = RegExp(this.searchText, 'i');
            this.filteredGoods = this.goods.filter(({ product_name }) => regexp.test(product_name));
        }
    },
    computed: {}
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
    font-family: 'Montserrat', -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell',
        'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif;
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
