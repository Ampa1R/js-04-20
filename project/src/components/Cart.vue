<template>
  <div class="cart-wrapper">
    <button class="cart-button" type="button" @click="isVisible = !isVisible">
      Корзина
    </button>
    <div v-show="isVisible" class="cart">
      <div v-for="item in items" :key="item.id_product" class="cart-item">
        <div class="cart-item-name">{{ item.product_name }}</div>
        <div class="cart-item-price">{{ item.price }}</div>
        <div class="cart-item-quantity">Количество: {{ item.quantity }}</div>
        <div class="cart-item-button" @click="$emit('removeItem', item.id_product)">x</div>
      </div>
      <div v-if="!items.length">
        Корзина пуста
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    items: {
      type: Array,
      required: true,
    },
  },
  data() {
    return {
      isVisible: false,
    };
  },
};
</script>

<style>
.cart-wrapper {
  position: relative;
}

.cart {
  position: absolute;
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.2);
  background-color: #fff;
  border-radius: 5px;
  padding: 10px;
  width: 400px;
  right: 0;
  top: 50px;
}

.cart-item {
    padding: 10px 5px;
    position: relative;
}

.cart-item:not(:last-child) {
    margin-bottom: 1px solid #ccc;
}

.cart-item-name {
    font-weight: bold;
}

.cart-item-button {
    background: #eee;
    position: absolute;
    top: 5px;
    right: 5px;
    border-radius: 50%;
    width: 25px;
    height: 25px;
    text-align: center;
}
</style>
