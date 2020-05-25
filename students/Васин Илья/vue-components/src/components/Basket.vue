<template>
    <div>
        <a href="#" class="cart-button" @click="visible">Basket</a>
        <div class="basket" v-show="isVisibleCart">
            <h2 class="basket__title">Basket:</h2>
            <div class="basket__goods" v-for="good in selectedGoods" :key="good.id" >
                <span>{{good.product_name}}: {{good.price}}</span>
                <button @click.self='removeFromBasket(good)' class="remove-button">Remove</button>
            </div>
            <div class="total-price">
                Total price: {{calcPrice}}
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "Basket",
}
</script>

<style>
.remove-button {
    margin-left: 10px;
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