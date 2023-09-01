export default [
  {
    path: "/supplier",
    name: "Supplier",
    component: () => import("@/pages/supplier/SupplierPage.vue"),
    meta: {
      title: "Supplier",
      icon: "fas fa-box-open",
    },
  },
  {
    path: "/supplier/create",
    name: "Tambah Supplier",
    component: () => import("@/pages/supplier/FormSupplier.vue"),
    meta: {
      title: "Tambah Supplier",
      icon: "fas fa-box-open",
      breadcrumb: "Tambah Supplier",
    },
  },
];
