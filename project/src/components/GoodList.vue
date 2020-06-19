<template>
    <div class="goods-list">
        <GoodsItem v-for="item in goods" 
        :item='item'  
        :key="item.product_name" @itemClick="$emit('itemClick', $event)"/>
        <GoodsListEmpty v-if="!goods.length"/>
    </div>
</template>

<script>
import GoodsItem from './GoodsItem.vue';
import GoodsListEmpty from './GoodsListEmpty';

export default {
    name: "GoodList",
    components: {
        GoodsItem,
        GoodsListEmpty
    },
    props: {
        goods: {
            type: Array,
            required: true,
        },
    },
    
}
</script>