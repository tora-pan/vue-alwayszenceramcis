<template>
  <div
    @click.self="getTotals"
    class="relative cursor-pointer flex justify-center items-center w-12 h-12 rounded-full border-solid border border-gray-600 bg-gray-100 text-white"
  >
    <div v-if="dropdownIcon === 'shopping-cart'">
      <CartDropdown />
    </div>
    <fa :icon="dropdownIcon" class="text-dark"></fa>
    <span
      v-if="badgeTotal > 0"
      class="absolute flex justify-center items-center -top-3 -right-3 bg-primary w-8 h-8 rounded-full"
      >{{ badgeTotal }}</span
    >
  </div>
</template>

<script>
import CartDropdown from "../cart-dropdown/CartDropdown.vue";

export default {
  name: "HeaderDropdownIcon",
  props: { dropdownIcon: String, badgeTotal: Number },
  components: {
    CartDropdown,
  },
  methods: {
    toggle() {},
    getTotals() {
      if (this.dropdownIcon === "shopping-cart") {
        this.$emit("getTotals");
      }
    },
  },
};
</script>

<style></style>
