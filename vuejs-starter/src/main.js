import Vue from 'vue'
import App from './App.vue'
import {name} from '../package.json';
import stitch from 'stitch-client';
import VueRouter from 'vue-router';
import Home from './components/Home'
import Page1 from './components/Page1'
import Page2 from './components/Page2'

Vue.config.productionTip = false

const routes = [
  { path: '/', component: Home },
  { path: '/page1', component: Page1 },
  { path: '/page2', component: Page2 }
]

const router = new VueRouter({
  routes
})

Vue.use(VueRouter);

const vm = new Vue({
  router,
  render: h => h(App)
})


stitch.mount('vue', name, { instance: vm });





