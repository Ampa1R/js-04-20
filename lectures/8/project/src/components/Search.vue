<template>
  <div class="search">
    <input type="text" class="goods-search" :value="searchText" @input="$emit('searchTextChange', $event.target.value)" />
  </div>
</template>

<script>
export default {
    props: {
        searchText: {
            type: String,
            required: true,
        },
    },
    name: 'Search',
}
</script>

<style>

</style>
