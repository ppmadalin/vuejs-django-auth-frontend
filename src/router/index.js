import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import store from "@/store";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/admin",
    component: () =>
      import(/* webpackChunkName: "admin" */ "../views/Admin.vue"),
    meta: { requiresAuth: true },
    children: [
      {
        path: "/admin/dashboard",
        name: "Dashboard",
        component: () =>
          import(/* webpackChunkName: "dashboard" */ "../views/Dashboard.vue"),
      },
      {
        path: "/admin/invoice",
        name: "Invoice",
        component: () =>
          import(/* webpackChunkName: "invoice" */ "../views/Invoice.vue"),
      },
      {
        path: "/admin/customer",
        name: "Customer",
        component: () =>
          import(/* webpackChunkName: "customer" */ "../views/Customer.vue"),
      },
      {
        path: "/admin/setting",
        name: "Setting",
        component: () =>
          import(/* webpackChunkName: "setting" */ "../views/Setting.vue"),
      },
    ],
  },
  {
    path: "/404",
    alias: "*",
    component: () =>
      import(/* webpackChunkName: "not-found" */ "../views/NotFound.vue"),
  },
];

const router = new VueRouter({
  mode: "history",
  routes,
});

router.beforeEach((to, from, next) => {
  if (to.matched.some((record) => record.meta.requiresAuth)) {
    if (!store.user) {
      next({
        name: "Home",
        query: { redirect: to.fullPath },
      });
    } else next();
  } else next();
});

export default router;
