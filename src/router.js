import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/Home.vue';
import First from './components/First.vue';
import Second from './components/Second.vue';
import DataTable from './components/DataTable.vue';
import Posts from './components/Posts.vue';


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
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/About.vue'),
    },
    {
      path: '/first',
      name: 'first',
      component: First,
    },
    {
      path: '/second',
      name: 'second',
      component: Second,
    },
    {
      path: '/datatable',
      name: 'datatable',
      component: DataTable,
    },
    {
      path: '/posts',
      name: 'posts',
      component: Posts,
    },
  ],
});
