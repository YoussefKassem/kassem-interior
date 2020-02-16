import Vue from 'vue'
import VueRouter from 'vue-router'
import HomePage from '../components/HomePage'

Vue.use(VueRouter)

let router = new VueRouter({
  mode : "history",
  
  routes: [
    {
      path: '/',
      name: 'home-page',
      component: HomePage,
    },
  //   {
  //       path: '/setup',
  //       name: 'setup-page',
  //       component: SetupPage,
  //       // props: true, // allows us to pass params to Dashboard component
  //   },
  //   {
  //     path: '/participation',
  //     name: 'paticipation-page',
  //     component: ParticipationPage,
  //     // props: true, // allows us to pass params to Dashboard component
  //   },
  //   {
  //     path: '/roadmap',
  //     name: 'roadmap-page',
  //     component: RoadmapPage,
  //     // props: true, // allows us to pass params to Dashboard component
  //   },
  //   {
  //     path: '/faq',
  //     name: 'faq-page',
  //     component: FaqPage,
  //     // props: true, // allows us to pass params to Dashboard component
  // },
  //   {
  //     path: '*',
  //     name: 'error-page',
  //     component: ErrorPage,
  //     // props: true, // allows us to pass params to Dashboard component
  // },
  ],
  scrollBehavior (to, from, savedPosition) {
    return { x: 0, y: 0 };
  }
})

/*
router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.requiresAuth) && localStorage.getItem('username') == null)
  {
    next({ path: '/', query: { redirect: to.fullPath }});
  } 
  else {
    next();
  }
});
*/

export default router