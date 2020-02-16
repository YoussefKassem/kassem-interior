import Vue from 'vue'
import App from './App.vue'
import router from './router';
import messages from './locale/messages';
import Buefy from 'buefy';
import VueI18n from 'vue-i18n'
import 'buefy/dist/buefy.css';
import Vuelidate from 'vuelidate'


Vue.use(Buefy)
Vue.use(VueI18n)
Vue.use(Vuelidate)


const i18n = new VueI18n({
  locale: 'en', // set locale
  fallbackLocale: 'en',
  messages, // set locale messages
})


new Vue({
  router,
  i18n,
  render: h => h(App),
}).$mount('#app')
