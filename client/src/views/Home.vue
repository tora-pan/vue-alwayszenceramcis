<template>
  <div class="home-page">
    <h1 class="title-text">Always Zen Ceramics</h1>
    <section class="main">
      <div class="newsletter">
        <p class="info-text">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sequi ut
          sapiente voluptatem recusandae. Nesciunt voluptas deserunt rem ratione
          quis laudantium expedita perspiciatis illum tenetur qui illo non iste
          aliquam numquam harum sunt, excepturi facere. Ex quos vero atque
          dolorem et sequi voluptate earum perspiciatis cupiditate fugiat,
          deleniti voluptatem tempora vitae.
        </p>
        <p class="info-text">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sequi ut
          sapiente voluptatem recusandae. Nesciunt voluptas deserunt rem ratione
          quis laudantium expedita perspiciatis illum tenetur qui illo non iste
          aliquam numquam harum sunt, excepturi facere. Ex quos vero atque
          dolorem et sequi voluptate earum perspiciatis cupiditate fugiat,
          deleniti voluptatem tempora vitae.
        </p>
        <input type="text" placeholder="input your email" />
        <button>Sign Up</button>
      </div>
      <img
        src="https://picsum.photos/500/500"
        alt="alternate"
        class="center-image"
      />
    </section>
    <section class="featured-companies">
      <h2>Zara</h2>
      <h2>Nordstrom</h2>
      <h2>Macy's</h2>
      <h2>Walmart</h2>
    </section>
    <section class="footer-section"></section>
  </div>
</template>

<script>
export default {
  name: "Home",
};
</script>

<style scoped>
.home-page {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.main {
  display: flex;
  flex-direction: row;
  /* justify-content: center; */
  gap: 50px;
}

.title-text {
  font-size: 5rem;
  margin: 100px;
}

.newsletter {
  width: 500px;
  line-height: 1.5;
  display: flex;
  flex-direction: column;
  justify-content: center;
}
.newsletter input,
button {
  width: 75%;
}

.icons {
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: flex-end;
  width: 500px;
}

.info-text {
  margin-bottom: 50px;
}

.featured-companies {
  width: 100%;
  height: 200px;
  background: rgb(2, 0, 36);
  background: linear-gradient(
    0deg,
    rgba(2, 0, 36, 1) 0%,
    rgba(255, 234, 207, 1) 0%,
    rgba(255, 243, 222, 1) 100%
  );
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
}

.footer-section {
  height: 400px;
}
</style>
