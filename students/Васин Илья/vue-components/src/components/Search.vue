<template>
    <div>
        <input type="text" class="goods-search" v-model='searchText'>
        <button class="search-button" type="button" v-on:click='togleClick'>Search</button>
    </div>
</template>

<script>
export default {
    name: "Search",
    props: {
        searchText: {
            type: String,
            required: true,
        }
    },
    methods: {
        togleClick() {
            this.$emit('filterGoods')
        }
    }
}
</script>