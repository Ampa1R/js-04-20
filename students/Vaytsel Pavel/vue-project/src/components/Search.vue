<template>
    <div class="search">
        <input type="text" class="goods-search" />
        <button class="search-button" type="button">Искать</button>
    </div>
</template>

<script>
export default {
    name: 'Search'
};
</script>

<style scoped>
div {
    flex: none;
    margin-right: 20px;
}
button,
input {
    height: 100%;
    padding: 5px;
}
</style>
