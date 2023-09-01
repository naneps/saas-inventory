export default [
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
