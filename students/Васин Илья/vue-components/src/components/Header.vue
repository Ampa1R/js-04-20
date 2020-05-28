<template>
    <header>
        <Basket/>
        <Search :searchText="searchText" />
    </header>
</template>

<script>
import Search from './Search.vue';
import Basket from './Basket.vue';

export default {
    name: "Header",
    components: {
        Basket,
        Search,
    },
    props: {
        searchText: {
            type: String,
            required: true,
        }
    }
}
</script>

<style>
header {
    padding: 10px 7%;
    margin-bottom: 30px;
    display: flex;
    justify-content: space-between;
}

.header-price {
    color: #2e4a62;
    font-size: 30px;
}
</style>