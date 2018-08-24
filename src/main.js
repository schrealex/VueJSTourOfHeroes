// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from "vue";
import App from "./App";
import VueRx from "vue-rx";
import VueRouter from "vue-router";
import Dashboard from "./components/Dashboard";
import Heroes from "./components/Heroes";
import HeroDetail from "./components/HeroDetail";

import "./filters/Uppercase";

Vue.config.productionTip = false;

Vue.use(VueRx);
Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    redirect: "/dashboard"
  },
  {
    path: "/dashboard",
    component: Dashboard,
    props: route => ({ name: route.query.name })
  },
  {
    path: "/heroes",
    component: Heroes,
    props: route => ({ name: route.query.name })
  },
  {
    path: "/detail/:id",
    component: HeroDetail,
    props: route => ({ name: route.query.name })
  }
];

const router = new VueRouter({
  routes
});

/* eslint-disable no-new */
new Vue({
  el: "#app",
  router,
  components: { App },
  template: "<App/>"
});
