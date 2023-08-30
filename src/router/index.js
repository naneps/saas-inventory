import { useAuthStore } from "@/store/modules/auth-store";
import { createRouter, createWebHashHistory } from "vue-router";
const routes = [
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
  //   {
  //     path: "/register",
  //     component: () => import("@/pages/auth/RegisterPage.vue"),
  //   },

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
  {
    name: "Produk",
    path: "/product",
    component: () => import("@/pages/product/ProductsPage.vue"),
    meta: {
      title: "Produk",
      icon: "fas fa-box-open", // Font Awesome icon class
    },
    children: [],
  },
  {
    name: "Tambah Produk",
    path: "/product/create",
    component: () => import("@/pages/product/ProductCreatePage.vue"),
    meta: {
      title: "Tambah Produk",
      icon: "fas fa-box-open", // Font Awesome icon class
      breadcrumb: "Tambah Produk", // Set breadcrumb label
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
