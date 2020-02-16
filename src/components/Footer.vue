<template>
  <div id="footer">
    <div id="copyright">&copy; 2020 ODK by Gemeente Amsterdam</div>
    <ul id="menu">
      <a href="#" class="footer-link">
        <li>
          <router-link to="/setup">{{ $t("gallery") }}</router-link>
        </li>
      </a>
      <a href="#" class="footer-link">
        <li>
          <router-link to="/participation">{{ $t("products") }}</router-link>
        </li>
      </a>
      <a href="#" class="footer-link">
        <li>
          <router-link to="/roadmap">{{ $t("aboutUs") }}</router-link>
        </li>
      </a>
      <!-- <a href="#" class="footer-link">
        <li>
          <router-link to="/contact">{{ $t("contact") }}</router-link>
        </li>
      </a>
      <a href="#" class="footer-link">
        <li>
          <router-link to="/privacy">{{ $t("policy") }}</router-link>
        </li>
      </a> -->
    </ul>
  </div>
</template>

<script>
export default {
  name: "app-footer",
  components: {},

  // ----

  props: [],

  // ----

  data: function() {
    return {
      // ---- settings ----
    };
  },

  // ----

  computed: {},

  // ----

  methods: {
    setup: function() {
      console.log("Header setup");
    }
  },

  // ====
  mounted: function() {
    // init
    this.setup();
  }
};
</script>

<style scoped>
#footer {
  width: 65%;
  height: 8.375rem;
  background: white;
  font-size: 18px;
  font-weight: 600;
  margin: 0 auto;
  display: flex;
  align-items: center;
}

#copyright {
  width: 40%;
  color: black;
  font-family: "Open Sans", sans-serif;
  font-size: 1rem;
  font-weight: 400;
  line-height: 1.875rem;
}

#menu {
  width: 60%;
  display: flex;
  justify-content: flex-end;
  align-items: center;
}

.footer-link {
  padding: 20px 10px;
  /* color: rgba(255, 255, 255, 0.5); */
  color: black;

}

#menu a {
  /* color: rgba(255, 255, 255, 0.5); */
  color: black;

  font-family: "Open Sans", sans-serif;
  font-size: 1rem;
  font-weight: 600;
  line-height: 1.875rem;
}

#menu a:hover {
  color: white;
}

.router-link-active {
  color: var(--white-color) !important;
  font-weight: 600 !important;
  opacity: 1;
}

@media only screen and (max-width: 1200px) {
  #footer {
    width: 80%;
  }
}

@media only screen and (max-width: 1023px) {
  #footer {
    padding: 50px 0px;
    flex-direction: column;
    justify-content: center;
  }

  #copyright {
    width: 80%;
    text-align: center;
  }

  #menu {
    width: 80%;
    display: none;
    flex-wrap: wrap;
    justify-content: space-between;
  }

  .footer-link {
    width: 50%;
  }
}
</style>
