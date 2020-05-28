<template>
    <div class="item">
        <p>{{item.product_name}}</p>
        <p>{{item.price}}</p>
        <button @click="handleClick">Добавить в корсину</button>
    </div>
</template>

<script>
export default {
    name: 'GoodsItem',
    props: {
        item: {
            type: Object,
            required: true,
        }
    },
    methods: {
        handleClick() {
            this.$emit('addItemBasket', this.item)
        }
    }
}
</script>