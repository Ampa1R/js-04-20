<template>
    <header>
        <Cart />
        <Search />
    </header>
</template>

<script>
import Search from './Search';
import Cart from './Cart';
export default { components: { Search, Cart } };
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
