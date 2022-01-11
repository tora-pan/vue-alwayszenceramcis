<template>
  <div class="flex flex-col justify-center items-center mb-10">
    <h1 class="text-4xl mb-10">Shop Page</h1>
    <!-- List of items -->
    <div class="grid grid-cols-2 gap-6">
      <Card
        :id="0"
        imageURL="https://picsum.photos/49/49"
        category="Bowls"
        title="Hand-made Bowl #1"
        description="ThisIsATest"
        :availableColors="['Black', 'White', 'Gray']"
        :price="250"
      />
      <Card
        :id="1"
        imageURL="https://picsum.photos/50/50"
        category="Plates"
        title="Amazing Plate"
        description="ThisIsATest4432"
        :availableColors="['Black', 'White', 'Gray', 'Red']"
        :price="25"
      />
      <Card
        :id="2"
        imageURL="https://picsum.photos/51/51"
        category="Utensils"
        title="Coolest Chopsticks"
        description="ThisIsATest"
        :availableColors="['Black', 'White', 'Gray']"
        :price="115"
      />
      <Card
        :id="3"
        imageURL="https://picsum.photos/52/52"
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


.cards {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 50px;
}
</style>
