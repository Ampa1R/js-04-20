<template>
    <div class="cart-wrapper">
        <button href="#" class="cart-button" @click="isVisible = !isVisible">Basket</button>
        <div class="cart" v-show="isVisible">
            <h2 class="basket__title">Basket:</h2>
            <div class="basket__goods" v-for="item in items" :key="item.id_product" >
                <span>{{item.product_name}}: {{item.price}}</span>
                <button @click.self="$emit('remove', item.id_product)" class="remove-button">Remove</button>
            </div>
            <div class="total-price">
                Total price: {{total}}
            </div>
            <div v-if="!items.length">Basket is empty</div>
        </div>
        
    </div>
</template>

<script>
export default {
    props: {
        total: {
            type: Number,
            required: true,
        },
        items: {
            type: Array,
            required: true,
        },
    },
    data() {
        return {
            isVisible:false,
        }
    },
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

.cart {
    position: absolute;
    top: 65px;
    left: 90px;
    border: 1px solid black;
    background: rgba(128, 128, 128, 0.3);
    padding: 20px;
}
.basket__goods {
    margin-bottom: 20px;
    color: #F0FFFF;
}
.basket__title {
    color: #ffffff;
    margin-bottom: 10px;
}
.removeButton:hover {
    color: rgb(52,52,55, 0.4);
    background: rgb(255,255,255, 0.6);
}
.total-price {
    font-size: 20px;
    color: rgb(255,255,255, 0.6);
    margin-bottom: 20px;
    color: #2e4a62;
    font-size: 30px;
}

.cart-button:hover {
    background: linear-gradient(rgb(126,126,134), rgb(70,71,76)) rgb(126,126,134);
}
.cart-button:active {
    background: linear-gradient(rgb(76,77,82), rgb(56,57,62)) rgb(76,77,82);
    box-shadow:
     0 0 1px rgba(0,0,0,.5) inset,
     0 2px 3px rgba(0,0,0,.5) inset,
     0 1px 1px rgba(255,255,255,.1);
}
</style> 

