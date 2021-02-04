// this is the file in which i have to inport vue router
import Vue from 'vue'
import VueRouter from "vue-router"

import App from './App.vue'
import Landing from './components/Landing'
import Todos from "./components/Todos"

Vue.use(VueRouter);
Vue.config.productionTip = false

// const Landing = { template: '<div>Landing</div>' }
// const Todos = { template: '<div>Todos</div>'}

const routes = [
  { path: '/:string', component: Landing },
  { path: '/Landing/:string', component: Landing },
  { path: "/Todos", component: Todos},
];

const router = new VueRouter({
  routes,
  mode: 'history'
})

new Vue({
  el: '#app',
  router,
  render: h => h(App),
})
