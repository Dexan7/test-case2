import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/Home.vue';
import DataTable from './components/DataTable.vue';
// import Comments from './components/Comments.vue';


Vue.use(Router);

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
    },
    // {
    //   path: '/about',
    //   name: 'about',
    //   // route level code-splitting
    //   // this generates a separate chunk (about.[hash].js) for this route
    //   // which is lazy-loaded when the route is visited.
    //   component: () => import(/* webpackChunkName: "about" */ './views/About.vue'),
    // },
    {
      path: '/datatable',
      name: 'datatable',
      component: DataTable,
    },
    {
      path: '/datatable/article/:id/comments',
      name: 'comments',
      component: DataTable,
      // потестить передачу роута в children, если успею
    },
  ],
});
