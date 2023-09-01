import { useAuthStore } from "@/store/modules/auth-store";
import { createRouter, createWebHashHistory } from "vue-router";
import product from "./modules/product";
import supplier from "./modules/supplier";
const routes = [
  ...product,
  ...supplier,
  {
    meta: {
      title: "Daftar Menu",
    },
    path: "/",
    name: "ListFeature",
    component: () => import("@/pages/Dashboard/ListFeature.vue"),
  },
  {
    meta: {
      title: "Login",
    },
    path: "/login",
    name: "login",
    component: () => import("@/pages/auth/LoginPage.vue"),
  },
  {
    name: "Loket Registrasi",
    path: "/registrasi-loket",
    component: () => import("@/pages/counter/RegisterCounter.vue"),
    meta: {
      title: "Loket Pembayaran",
      icon: "fas fa-ticket-alt", // Font Awesome icon class
    },
  },
  {
    name: "Loket Pembayaran",
    path: "/loket-pembayaran",
    component: () => import("@/pages/counter/PaymentCounter.vue"),
    meta: {
      title: "Loket Pembayaran",
      icon: "fas fa-money-check-alt", // Font Awesome icon class
    },
  },
  {
    name: "Pemeriksaan",
    path: "/pemeriksaan",
    component: () => import("@/pages/checkup/CheckupPage.vue"),
    meta: {
      title: "Pemeriksaan",
      icon: "fas fa-stethoscope", // Font Awesome icon class
    },
  },

  {
    name: "Dokter",
    path: "/doctor",
    component: () =>
      import(/* webpackChunkName: "dokter" */ "@/views/Dokter.vue"),
    meta: {
      title: "Dokter",
      icon: "fas fa-user-md", // Font Awesome icon class
    },
  },
];
const router = createRouter({
  history: createWebHashHistory(),
  routes,
  linkActiveClass: "active",
  scrollBehavior(to, from, savedPosition) {
    if (to.hash) {
      return {
        el: to.hash,
        behavior: "smooth",
      };
    }
    return savedPosition || { top: 0 };
  },
});

router.beforeEach((to, from, next) => {
  const authStore = useAuthStore();
  const isLoggedIn = authStore.isLoggedIn;
  document.title = to.meta.title;
  if (to.name !== "login" && !isLoggedIn) {
    next({ name: "login" });
  } else {
    next();
  }
});

export default router;
