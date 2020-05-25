<template>
    <div class="goods-list" v-if="">
        <GoodsItem v-for="item in goods" :key="item.product_name" :item="item" />
    </div>
</template>

<script>
import GoodsItem from './GoodsItem.vue';

export default {
    name: 'GoodsList',
    components: {
        GoodsItem
    },
    props: {
        goods: {
            type: Array,
            required: true
        }
    }
};
</script>

<style>
.goods-list {
    width: 70%;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
}
</style>
