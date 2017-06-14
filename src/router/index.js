import Vue from 'vue';
import Router from 'vue-router';
import {Home,Beers, Photos, Promos, Events, Contact} from '@/components/pages/index.js';
import Error from '@/components/errors/Error.vue';


Vue.use(Router)

export default new Router({
  routes: [
    // {
    //   path: '/',
    //   name: 'Hello',
    //   component: Hello
    // },
    {
      path: '/',
      redirect: '/Home'
    },
    {
      path: '/Home',
      name: 'Home',
      component: Home
    },
    {
      path: '/Beers',
      name: 'Beers',
      component: Beers
    },
    {
      path: '/Events',
      name: 'Events',
      component: Events
    },
    {
      path: '/Promos',
      name: 'Promos',
      component: Promos
    },
    {
      path: '/Photos',
      name: 'Photos',
      component: Photos
    },
    {
      path: '/Contact',
      name: 'Contact',
      component: Contact
    },
    {
      path: '/Error/:type',
      name: 'error',
      component: Error
    },
    {
      path: '*',
      redirect: '/Error/404'
    }
  ]
})
