import Vue from "vue";
import Router from "vue-router";
import baseFrame from "@/wibgets/favorCity";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      name: "Hello",
      component: baseFrame
    }
  ]
});
