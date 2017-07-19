/* eslint-disable */
import Vue from 'vue';
import Router from 'vue-router';
import Shouye from '@/pages/Shouye';
import Query from '@/pages/Query';
import Answer from '@/pages/Answer';
import Feedback from '@/pages/Feedback';
import AddTree from '@/pages/AddTree';
import TodoList from '@/pages/TodoList';

Vue.use(Router);

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/shouye',
      name: 'shouye',
      component: Shouye
    },
    {
      path: '/query',
      name: 'query',
      component: Query
    },
    {
      path: '/answer',
      name: 'answer',
      component: Answer
    },
    {
      path: '/feedback',
      name: 'feedback',
      component: Feedback
    },
    {
      path: '/addTree',
      name: 'addTree',
      component: AddTree
    },
    {
      path: '/todoList',
      name: 'todoList',
      component: TodoList
    },

    
    {
      path: '*',
      redirect: '/shouye'
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
