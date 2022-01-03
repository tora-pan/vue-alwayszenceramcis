<template>
  <div class="shop-page">
    <h1>Shop Page</h1>
    <!-- List of items -->
    <div class="cards">
      <Card
        :id="0"
        category="Bowls"
        title="Hand-made Bowl #1"
        description="ThisIsATest"
        :availableColors="['Black', 'White', 'Gray']"
        :price="250"
      />
      <Card
        :id="1"
        category="Plates"
        title="Amazing Plate"
        description="ThisIsATest4432"
        :availableColors="['Black', 'White', 'Gray', 'Red']"
        :price="25"
      />
      <Card
        :id="2"
        category="Utensils"
        title="Coolest Chopsticks"
        description="ThisIsATest"
        :availableColors="['Black', 'White', 'Gray']"
        :price="115"
      />
      <Card
        :id="3"
        category="Bowls"
        title="Our New Zen Bowl!"
        description="ThisIsATest"
        :availableColors="['Black', 'White', 'Gray']"
        :price="4"
      />
    </div>
  </div>
</template>

<script>
import Card from "../components/card/Card.vue";

export default {
  name: "Shop",

  components: {
    Card,
  },
};
</script>

<style scoped>
h1 {
  margin-bottom: 50px;
}

.shop-page {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 20px;
  margin-bottom: 20px;
}

.cards {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 50px;
}
</style>
