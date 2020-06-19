<template>
    <div class="item">
        <p>{{item.product_name}}</p>
        <p>{{item.price}}</p>
        <button @click="handleClick" class="addButton ">Добавить в корзину</button>
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
            this.$emit('itemClick', this.item)
        }
    }
}
</script> 

<style >
.addButton {
    cursor: pointer;
    display: inline-block;
    color: white;
    font-weight: 700;
    text-decoration: none;
    user-select: none;
    padding: .5em 2em;
    outline: none;
    border: 2px solid;
    border-radius: 1px;
    transition: 0.2s;
    background: rgb(52,52,55, 0.4);
}
</style>