<template>
    <div class="goods-item">
        <p>{{ item.product_name }}</p>
        <p>{{ item.price }}</p>
        <button @click="handleClick">Добавить в корзину</button>
    </div>
</template>

<script>
export default {
    name: 'GoodsItem',
    props: {
        item: {
            type: Object,
            required: true
        }
    },
    methods: {
        handleClick() {
            this.$emit('itemClick', this.item.product_name);
        }
    }
};
</script>

<style>
.goods-item {
    box-shadow: 0 3px 6px rgba(0, 0, 0, 0.2);
    flex-basis: calc(25% - 40px);
    margin: 20px;
    background-color: #fff;
    border-radius: 5px;
    padding: 10px;
}
</style>
