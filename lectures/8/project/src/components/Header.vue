<template>
  <header>
    <div class="logo">
      eShop
    </div>
    <slot />
  </header>
</template>

<script>
export default {

};
</script>

<style>
header {
  display: flex;
  justify-content: space-between;
  background: #fff;
  padding: 20px;
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.2);
}

.logo {
  font-size: 28px;
  font-weight: bold;
}
</style>
