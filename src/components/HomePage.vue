<template>
  <div>
    <div class="intro-grid">
      <!-- <img class="corner-shape" src="../assets/cornershape-2.png" /> -->
      <div class="item-one">
        <h1>Object Detection Kit</h1>
        <h4 class="intro-subtitle">{{ $t("subtitle") }}</h4>
        <div>
          <router-link to="/participation">
            <b-button
              rounded
              id="cto-button"
              size="is-medium"
              type="is-info"
            >{{ $t("startButton") }}</b-button>
          </router-link>
        </div>
      </div>
      <div class="item-two">
        <img class="artwork-desktop" src="../assets/tesla/tesla-cover.png" />
        <!-- <img class="artwork-mobile" src="../assets/artwork-mobile.png" /> -->
      </div>
    </div>
    <div id="gallery-section">
      <div id="gallery-header">
        <h2>Gallery</h2>
      </div>
      <div id="gallery-images">
        <div>
          <img class="gallery-img" src="../assets/tesla/cover-2.png" alt />
        </div>
        <div>
          <img class="gallery-img" src="../assets/nissan/cover-2.png" alt />
        </div>
        <div>
          <img class="gallery-img" src="../assets/toyota/img1.png" alt />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "home-page",
  data() {
    return {};
  },
  mounted() {
    console.log("HI");
  }
};
</script>

<style scoped>
h1 {
  font-size: 2.75rem !important; /*41 px  */
  color: black !important;
  display: block;
  font-family: "Nunito Sans" !important;
  line-height: 3.5rem; /*56 px  */
  font-weight: 700;
}

h4 {
  font-size: 1.5rem; /*24 px  */
  font-weight: 400; /*regular */
  line-height: 2.0625rem; /*33 px  */
  color: black !important;
  font-family: "Open Sans", sans-serif;
}

#intro-section {
  height: 800px;
  background: white;
  display: flex;
}

.intro-grid {
  display: grid;
  grid-template-columns: 50% 50%;
  width: 75%;
  max-width: 1400px;
  margin: 0 auto;
  height: 800px;
  background: white;
}

.item-one {
  align-self: center;
  position: relative;
  z-index: 15;
}

.item-two {
  display: flex;
  justify-content: flex-end;
  align-self: center;
}

.intro-subtitle {
  margin-bottom: 2.875rem;
}

#cto-button {
  width: 9.125rem;
  height: 2.625rem;
  background: grey;
  color: white;
  font-family: "Open Sans", sans-serif;
  font-size: 1rem;
  font-weight: 600;
  line-height: 1.375rem;
  /* color: var(--second-purple-color); */
}

.artwork-desktop{
  height: 800px;
  object-fit: cover;
}

#gallery-section {
  display: flex;
  flex-direction: column;
  height: auto;
  padding-top: 15px;
  background: #f9f8fa;
  justify-content: center;
  align-items: center;
}

#gallery-header{
  display: flex;
  width: 75%;
  justify-content: flex-start;
}

#gallery-section h2 {
  font-size: 36px;
  color: black;
}

#gallery-images {
  display: flex;
  flex-direction: row;
  /* border: 2px solid blue; */
  width: 75%;
  justify-content: flex-start;
}

#gallery-section div {
  margin: 20px 15px;
}

.gallery-img {
  height: 300px;
  object-fit: cover;
}
</style>