<template>
  <div
    class="relative m-auto overflow-hidden w-520 bg-light rounded-lg shadow-lg"
  >
    <div class="p-2">
      <img
        src="http://mistillas.cl/wp-content/uploads/2018/04/Nike-Epic-React-Flyknit-%E2%80%9CPearl-Pink%E2%80%9D-01.jpg"
      />
    </div>

    <p class="mt-1 ml-3">choose color</p>
    <div class="grid grid-cols-4 gap-4 w-2/3 ml-5 mt-2 mb-4 bg-light text-dark">
      <div
        v-for="color in availableColors"
        :key="color"
        class="p-2 border border-white text-dark cursor-pointer transition"
        :class="activeColor === color ? 'focus' : ''"
        @click="toggle(color)"
      >
        {{ color }}
      </div>
    </div>

    <div class="product">
      <p>{{ category }}</p>
      <h1>{{ title }}</h1>
      <h2>${{ price }}</h2>
      <p class="desc">
        {{ description }}
      </p>
      <div class="buttons">
        <button class="add" @click="addItemToCart">Add to Cart</button>
        <button
          class="like"
          :class="isToggled ? 'focus' : ''"
          @click="toggleFocus"
        >
          <span>♥</span>
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Card",
  data() {
    return {
      activeColor: null,
      isToggled: false,
    };
  },
  methods: {
    toggle(itemColor) {
      this.activeColor = itemColor;
    },
    toggleFocus() {
      this.isToggled = !this.isToggled;
      this.$store.dispatch("addLiked", {
        productId: this.id,
        productURL: this.imageURL,
        productLiked: this.isToggled,
        productName: this.title,
        productDescription: this.description,
        productPrice: this.price,
        productQuantity: 1,
      });
    },
    addItemToCart() {
      this.$store.dispatch("addItem", {
        productId: this.id,
        productURL: this.imageURL,
        productName: this.title,
        productDescription: this.description,
        productPrice: this.price,
        productQuantity: 1,
      });
    },
  },

  props: {
    id: Number,
    imageURL: String,
    category: String,
    title: String,
    price: Number,
    description: String,
    availableColors: Array,
  },
};
</script>

<style scoped>
html {
  display: grid;
  min-height: 100%;
}

body {
  display: grid;
  background: #e0c9cb;
  font-family: "Lato", sans-serif, sans-serif;
  text-transform: uppercase;
}

p {
  font-size: 0.6em;
  color: #ba7e7e;
  letter-spacing: 1px;
}

h1 {
  font-size: 1.2em;
  color: #4e4e4e;
  margin-top: -5px;
}

h2 {
  color: #c3a1a0;
  /* margin-top: -2px; */
  margin-bottom: 5px;
}

img {
  width: 290px;
  margin-top: 47px;
}

.product {
  position: absolute;
  width: 40%;
  height: 100%;
  top: 10%;
  left: 60%;
}
.product p {
  margin-bottom: 5px;
}

.desc {
  text-transform: none;
  letter-spacing: 0;
  margin-bottom: 17px;
  color: #4e4e4e;
  font-size: 0.7em;
  line-height: 1.6em;
  margin-right: 25px;
  text-align: justify;
}

button {
  background: #cda9ac;
  padding: 10px;
  display: inline-block;
  outline: 0;
  border: 0;
  margin: -1px;
  border-radius: 2px;
  text-transform: uppercase;
  letter-spacing: 1px;
  color: #f5f5f5;
  cursor: pointer;
}
button:hover {
  background: #ba7e7e;
  transition: all 0.4s ease-in-out;
}

.add {
  width: 67%;
}

.like {
  width: 22%;
}

.size:hover {
  background: #ba7e7e;
  color: #f5f5f5;
  transition: all 0.4s ease-in-out;
}

.focus {
  background: #ba7e7e;
  color: #f5f5f5;
}
</style>
