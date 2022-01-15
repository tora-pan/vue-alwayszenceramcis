<template>
  <div>
    <h1 class="flex justify-center my-4 text-4xl">Favorites</h1>
    <div class="my-0 w-3/4 mx-auto">
      <div class="flex flex-row flex-wrap gap-4 justify-start">
        <FavoritesCard
          v-for="favorite in likedList"
          :key="favorite.productId"
          :title="favorite.productName"
          :description="favorite.productDescription"
          :price="favorite.productPrice"
        />
      </div>
    </div>
    <button @click="testi">Test</button>
  </div>
</template>

<script>
import FavoritesCard from "../components/card/FavoritesCard.vue";

export default {
  name: "Favorites",
  components: {
    FavoritesCard,
  },
  data() {
    return {};
  },
  computed: {
    likedList() {
      return this.$store.state.cart.likedItems;
    },
  },
  methods: {},
  props: {},
};
</script>

<style></style>
