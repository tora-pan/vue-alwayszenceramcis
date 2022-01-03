<template>
  <div class="card">
    <div class="images">
      <img
        src="http://mistillas.cl/wp-content/uploads/2018/04/Nike-Epic-React-Flyknit-%E2%80%9CPearl-Pink%E2%80%9D-01.jpg"
      />
    </div>
    <div class="slideshow-buttons">
      <div class="one"></div>
      <div class="two"></div>
      <div class="three"></div>
      <div class="four"></div>
    </div>
    <p class="pick">choose color</p>
    <div class="sizes">
      <div
        v-for="color in availableColors"
        :key="color"
        class="size"
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
    },
    addItemToCart() {
      console.log("addItemToCart");
      this.$store.dispatch("addItem", {
        productId: this.id,
        productName: this.title,
        productDescription: this.description,
        productPrice: this.price,
        productQuantity: 1,
      });
    },
  },

  props: {
    id: Number,
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
.card {
  position: relative;
  margin: auto;
  overflow: hidden;
  width: 520px;
  height: 350px;
  background: #f5f5f5;
  box-shadow: 5px 5px 15px rgba(186, 126, 126, 0.5);
  border-radius: 10px;
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

.slideshow-buttons {
  top: 70%;
  /* display: none; */
}

.one,
.two,
.three,
.four {
  position: absolute;
  width: 7px;
  height: 7px;
  border-radius: 50%;
  background: #beb2b2;
}

.one {
  left: 22%;
}

.two {
  left: 27%;
}

.three {
  left: 32%;
}

.four {
  left: 37%;
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

.sizes {
  display: grid;
  color: #d9aab7;
  grid-template-columns: repeat(auto-fill, 50px);
  width: 60%;
  grid-gap: 4px;
  margin-left: 20px;
  margin-top: 5px;
}
.sizes:hover {
  cursor: pointer;
}

.pick {
  margin-top: 11px;
  margin-bottom: 0;
  margin-left: 20px;
}

.size {
  padding: 9px;
  border: 1px solid #e0c9cb;
  font-size: 0.7em;
  text-align: center;
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
