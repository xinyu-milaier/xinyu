/* eslint-disable */
import Vue from 'vue';
import Router from 'vue-router';
import Query from '@/pages/Query';
import Tree from '@/pages/Tree';
import Feedback from '@/pages/Feedback';

Vue.use(Router);

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/query',
      name: 'query',
      component: Query
    },
    {
      path: '/tree',
      name: 'tree',
      component: Tree
    },
     {
      path: '/feedback',
      name: 'feedback',
      component: Feedback
    },
    {
      path: '*',
      redirect: '/query'
    }
  ],
  scrollBehavior (to, from, savedPosition) {
    if (to.hash) {
      return {
        selector: to.hash
      }
    }
  }
});
