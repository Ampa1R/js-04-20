<template>
    <div class="item">
        <p>{{ item.product_name }}</p>
        <p>{{ item.price }}</p>
        <button @click="handleClick">Добавить в корзину</button>
    </div>
</template>

<script>
export default {
    name: 'Item',
    props: {
        item: {
            type: Object,
            required: true
        },
    },
    methods: {
        handleClick() {
            this.$emit('itemClick', this.item.product_name);
        }
    }
}
</script>

<style>

</style>
