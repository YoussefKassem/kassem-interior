<template>
  <div id="app">
    <Header></Header>
    <div id="page">
      <div id="container">
        <router-view>
          <!-- content here -->
        </router-view>
      </div>
    </div>
    <Footer></Footer>
  </div>
  <!-- end app -->
</template>

<script>
import Header from "./components/Header";
import Footer from "./components/Footer";

export default {
  name: "app",
  data() {
    return {
      language: ""
    };
  },
  components: {
    Header,
    Footer
  },
  mounted() {
  }

};
</script>

<style>
:root {
  --main-purple-color: #3a225d;
  --second-purple-color: #2f1c50;
  --red-color: #e1524a;
  --pink-color: #c83760;
  --yellow-color: #f6d365;
  --white-color: #ffffff;
  --second-white-color: #f9f8fa;
  --black-color: #000000;
  --dark-blue-color: #151522;
  --error-color: #c83737;
  --success-color: #37c88b;
  --grey-color: #e2dee9;
  --grey-blue-color: #9891a4;
}


html {
  width: 100%;
  height: 100%;
  scroll-behavior: smooth;
  overflow-x: hidden !important;
}

/deep/ :focus {
  outline: none;
}

:focus {
  outline: none;
}

#app,
#page {
    background-color: white;
}


#container {
  display: block;
  max-width: 100vw;
  position: relative;
  margin-left: auto; 
  margin-right: auto;
}

@media not all and (min-resolution:.001dpcm) { 
    @media {
        #container{
          overflow: hidden;
        }
    }
}

@media only screen and (max-width: 1023px) {
  html {
    scroll-behavior: unset;
  }
  #container{
    overflow: hidden;
  }
}
</style>
