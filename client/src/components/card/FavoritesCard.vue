<template>
  <figure class="snip1268">
    <div class="image">
      <img
        src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/331810/sq-sample4.jpg"
        alt="sq-sample4"
      />
      <a href="#" class="add-to-cart">Add to Cart</a>
    </div>
    <figcaption>
      <h2>{{ title }}</h2>
      <p>
        {{ description }}
      </p>
      <div class="price">${{ price }}</div>
    </figcaption>
  </figure>
</template>

<script>
export default {
  name: "FavoritesCard",
  props: {
    title: String,
    description: String,
    price: Number,
  },
};
</script>

<style scoped>
.snip1268 {
  font-family: "Raleway", Arial, sans-serif;
  position: relative;
  overflow: hidden;
  margin: 10px;
  min-width: 220px;
  max-width: 310px;
  width: 100%;
  color: #000000;
  text-align: center;
  background-color: #c3baba;
  line-height: 1.6em;
}
.snip1268 * {
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  -webkit-transition: all 0.6s ease;
  transition: all 0.6s ease;
}
.snip1268 .image {
  position: relative;
}
.snip1268 img {
  max-width: 100%;
  vertical-align: top;
  -webkit-transition: opacity 0.35s;
  transition: opacity 0.35s;
}
.snip1268 .add-to-cart {
  position: absolute;
  left: 20px;
  right: 20px;
  opacity: 0;
}

.snip1268 .add-to-cart {
  position: absolute;
  bottom: 20px;
  -webkit-transform: translateY(100%);
  transform: translateY(100%);
  font-size: 0.8em;
  color: #000000;
  line-height: 46px;
  letter-spacing: 1.5px;
  background-color: #ffffff;
  font-weight: 700;
  text-decoration: none;
  text-transform: uppercase;
}
.snip1268 .add-to-cart:hover {
  background: #000000;
  color: #ffffff;
}
.snip1268 figcaption {
  padding: 20px 20px 30px;
}
.snip1268 h2,
.snip1268 p {
  margin: 0;
  text-align: left;
}
.snip1268 h2 {
  margin-bottom: 10px;
  font-weight: 700;
}
.snip1268 p {
  margin-bottom: 15px;
  font-size: 0.85em;
  font-weight: 500;
}
.snip1268 .price {
  font-size: 1.3em;
  opacity: 0.5;
  font-weight: 700;
  text-align: right;
}
.snip1268:hover img,
.snip1268.hover img {
  opacity: 0.8;
}

.snip1268:hover .add-to-cart,
.snip1268.hover .add-to-cart {
  -webkit-transform: translateY(0);
  transform: translateY(0);
  opacity: 1;
}
</style>
