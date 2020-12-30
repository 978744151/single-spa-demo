import Router from "vue-router";
import Home from "./view/home";

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/app3",
      name: "home",
      component: Home,
    },
  ],
});
