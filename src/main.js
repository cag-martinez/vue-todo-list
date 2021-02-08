// this is the file in which i have to inport vue router
import Vue from "vue";
import VueRouter from "vue-router";

import App from "./App.vue";
import Landing from "../src/views/Landing";
import Todos from "./components/Todos";

Vue.use(VueRouter);
Vue.config.productionTip = false;



// const routes = [
//   { path: '/', component: Landing },
//   { path: '/Landing/:string', component: Landing },
//   { path: "/Todos/:todos", component: Todos},
// ];


  // mode: "history",
  const routes = [
    { path: "/", component: Landing },
    { path: "/Landing/:string", component: Landing },
    { path: "/Todos/:todos", component: Todos },
  ]

  const router = new VueRouter({
    routes
});

new Vue({
  el: "#app",
  router,
  render: (h) => h(App),
}).$mount("#app");
