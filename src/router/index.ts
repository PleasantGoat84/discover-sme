import Vue from "vue";
import VueRouter, { RouteConfig } from "vue-router";
import Home from "../views/Home.vue";

Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
  {
    path: "/home",
    name: "Home",
    component: Home
  },
  {
    path: "/upload",
    name: "Upload",
    // route level code-splitting
    // this generates a separate chunk (upload.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "upload" */ "../views/Upload.vue"),
    meta: {
      title: "上傳分享"
    }
  },
  {
    path: "/view-all",
    name: "ViewAll",
    component: () =>
      import(/* webpackChunkName: "view-all" */ "../views/ViewAll.vue"),
    meta: {
      title: "中小企目錄"
    }
  },
  {
    path: "*",
    redirect: {
      path: "/home",
      query: {}
    }
  }
];

const router = new VueRouter({
  routes,
  scrollBehavior(to, from, savedPos) {
    if (savedPos) {
      return savedPos;
    } else {
      return { x: 0, y: 0 };
    }
  }
});

router.beforeEach((to, from, next) => {
  document.title = to.meta && to.meta.title ? to.meta.title : "發現澳門中小企";
  next();
});

export default router;
