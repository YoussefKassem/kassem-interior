<template>
  <div id="header">
    <div id="content">
      <b-navbar class="navbar">
        <template slot="brand">
          <b-navbar-item id="logo" tag="router-link" :to="{ path: '/' }">
            <!-- <img id="logo-image" src="../assets/logo.png" /> -->
            <h1>Luxury Trim</h1>
          </b-navbar-item>
        </template>
        <template slot="end" class="menu">
          <!-- :class="{ 'nav-active' : setupActive }" 
          @click="makeNavActive()"-->
          <b-navbar-item
            tag="router-link"
            :to="{ path: '/setup' }"
            class="nav-item"
            href="#"
          >{{ $t("gallery") }}</b-navbar-item>
          <b-navbar-item
            tag="router-link"
            :to="{ path: '/participation' }"
            class="nav-item"
            href="#"
          >{{ $t("products") }}</b-navbar-item>
          <b-navbar-item
            tag="router-link"
            :to="{ path: '/roadmap' }"
            class="nav-item"
            href="#"
          >{{ $t("aboutUs") }}</b-navbar-item>
          <b-navbar-item href="#">
            <ul id="language-switch">
              <li>
                <a :class="{ active : englishActive }" @click="switchLanguage('en')">EN</a>
              </li>
              <li>
                <a :class="{ active : dutchActive }" @click="switchLanguage('nl')">NL</a>
              </li>
            </ul>
          </b-navbar-item>
        </template>
      </b-navbar>
    </div>
  </div>
</template>


<script>
import { eventBus } from "../main";

export default {
  name: "app-header",
  components: {},

  // ----

  props: [],

  // ----

  data: function() {
    return {
      englishActive: true,
      dutchActive: false,
      ///-----
      setupActive: false,
      participateActive: false,
      roadmapActive: false,
      faqActive: false
    };
  },

  methods: {
    // ----

    switchLanguage: function(language) {
      this.$i18n.locale = language;
      this.englishActive = !this.englishActive;
      this.dutchActive = !this.dutchActive;
      localStorage.englishActive = this.englishActive;
      localStorage.dutchActive = this.dutchActive;
      //Send signal to roadmap component
      if (!this.dutchActive) {
        eventBus.$emit("langEnActive", this.englishActive);
        localStorage.language = "en";
      } else if (!this.englishActive) {
        eventBus.$emit("langNlActive", this.dutchActive);
        localStorage.language = "nl";
      }
    },

    setChosenLanguage() {
      //Set language for previous users
      // console.log(localStorage);
      if (localStorage.dutchActive && localStorage.language == "nl") {
        this.englishActive = false;
        this.dutchActive = true;
        this.$i18n.locale = "nl";
      } else if (localStorage.englishActive && localStorage.language == "en") {
        this.dutchActive = false;
        this.englishActive = true;
        this.$i18n.locale = "en";
      } else {
        console.log("No specified language");
      }
    },

    stickyHeader() {
      // console.log("hoi");
      let header = document.getElementById("header");
      setInterval(function() {
        let scrollTop = window.scrollY;
        if (scrollTop > 400) {
          // console.log("hoger");
          header.setAttribute("id", "sticky-header");
        } else {
          header.setAttribute("id", "header");
        }
      }, 500);
    },
    makeNavActive() {
      console.log(this.setupActive);

      // this.setupActive = !this.setupActive;
    }
  },

  beforeMount() {
    this.setChosenLanguage();
  },

  mounted() {
    this.stickyHeader();
  }
};
</script>

<style scoped>
h1 {
  font-size: 1.75rem !important; /*41 px  */
  color: white !important;
  display: block;
  font-family: "Nunito Sans" !important;
  line-height: 3.5rem; /*56 px  */
  font-weight: 700;
}


h3 {
  font-size: 1.25rem !important; /*20 px  */
  font-family: "Nunito Sans" !important;
  font-weight: regular;
  line-height: 2.5rem; /*40px  */
  color: var(--white-color) !important;
}

#header {
  display: block;
  width: 100%;
  margin: 0 auto;
  height: auto;
  background: black;
  position: relative;
  z-index: 20;
  transition: 0.2s;
}

#sticky-header {
  position: sticky;
  width: 100%;
  margin: 0 auto;
  height: auto;
  background: transparent;
  top: 0;
  z-index: 20;
  background: black;
  transition: 0.3s;
}

#logo {
  padding-left: 0;
}

#logo-image {
  height: 22px;
}

.navbar {
  background-color: transparent;
  background-image: none;
}

#content {
  width: 75%;
  max-width: 1400px;
  margin: 0 auto;
  display: block;
  position: relative;
}

#header h3 {
  display: block;
  font-size: 1.4em;
  color: var(--black-color);
  font-weight: bold;
  width: 200px;
  padding: 0;
  margin: 0;
}

/deep/ .navbar-item {
  padding: 1.5rem 0 1.5rem 0.75rem;
}

.nav-item {
  margin-right: 2rem;
  opacity: 0.5;
  font-family: "Open Sans", sans-serif;
  font-size: 1rem;
  font-weight: 600;
  line-height: 1.875rem;
  color: var(--white-color);
}

ul#menu {
  display: block;
  position: absolute;
  right: 0;
  top: 0;
  list-style: none;
  line-height: 80px;
}

ul#menu li {
  display: inline-block;
  margin-right: 20px;
  font-weight: bold;
  vertical-align: top;
}

/deep/ .navbar-menu {
  background-color: transparent;
}

/deep/ .is-active {
  background-color: var(--main-purple-color);
}

a:hover,
a:active,
a:focus {
  color: white !important;
  background: none !important;
  opacity: 1;
}

.nav-item a :hover,
.nav-item a :focus-within,
.nav-item a :active {
  color: var(--white-color) !important;
  background: none !important;
  opacity: 1;
}

ul#language-switch {
  display: block !important;
}

ul#language-switch li {
  display: inline-block !important;
  padding-left: 10px;
  line-height: 1em;
  font-size: 1.1em;
}

ul#language-switch li:first-child {
  border-right: 2px solid rgba(255, 255, 255, 0.5);
  padding-right: 10px;
}

ul#language-switch li a {
  opacity: 1;
  font-size: 1rem;
  font-weight: 400;
  color: rgba(255, 255, 255, 0.5);
}

.active {
  color: var(--yellow-color) !important;
  font-weight: 700 !important;
}

.router-link-active {
  color: var(--white-color) !important;
  font-weight: 600 !important;
  opacity: 1;
}

ul#language-switch li a:hover {
  color: var(--yellow-color) !important;
  background-color: transparent !important;
  opacity: 1;
}

/deep/ .navbar-burger {
  color: var(--white-color);
  height: auto;
}

/deep/ .navbar-burger:hover {
  background-color: transparent;
}

/deep/ .navbar-burger span {
  left: calc(100% - 16px);
}

@media only screen and (max-width: 1200px) {
   #content {
    width: 900px;
  }
}

@media only screen and (max-width: 1023px) {
  ul#language-switch li:first-child {
    padding-left: 0;
  }

  #content {
    width: 80%;
  }

  /deep/ .navbar-menu {
    box-shadow: none;
  }
}
</style>
