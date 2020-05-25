<template>
  <header>
    <button class="cart-button" type="button">Корзина</button>
    <button class="search-button" type="button">Искать</button>
    <input type="text" class="goods-search" />
  </header>
</template>

<script>
export default {

};
</script>

<style>
header {
  display: flex;
  flex-direction: row-reverse;
  background: #fff;
  padding: 20px;
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.2);
}
</style>
