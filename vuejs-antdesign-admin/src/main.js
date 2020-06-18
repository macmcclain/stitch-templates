import Vue from 'vue'
import App from './App.vue'
import {name} from '../package.json';
import stitch from 'stitch-client';
import Antd from 'ant-design-vue';
import VueRouter from 'vue-router';
import Home from './pages/Home'
import 'ant-design-vue/dist/antd.css';


Vue.use(Antd);

Vue.config.productionTip = false

const routes = [
  { path: '/', name: 'home', component: Home }
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





