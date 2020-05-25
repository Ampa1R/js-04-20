<template>
    <div class="goods-list">
        <GoodsItem v-for="item in goods" 
        :item='item'  
        :key="item.product_name"/>
    </div>
</template>

<script>

import GoodsItem from './GoodsItem.vue';
export default {
    name: "GoodList",
    components: {
        GoodsItem
    },
    props: {
        goods: {
            type: Array,
            required: true,
        },
    },
    
}
</script>

