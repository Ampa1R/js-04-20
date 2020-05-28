<template>
  <div class="goods-list">
    <GoodsItem v-for="item in goods" :key="item.product_name" :item="item" @itemClick="$emit('itemClick', $event)" />
    <GoodsListEmpty v-if="!goods.length" />
  </div>
</template>

<script>
import GoodsItem from "./GoodsItem.vue";
import GoodsListEmpty from "./GoodsListEmpty.vue";

export default {
  name: "GoodsList",
  components: {
    GoodsItem,
    GoodsListEmpty,
  },
  props: {
    goods: {
      type: Array,
      required: true,
    },
  },
};
</script>

<style>
.goods-list {
  width: 70%;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
}
</style>
