export default [
  {
    name: "Form Registrasi Loket",
    path: "/registrasi-loket/formulir",
    component: () => import("@/pages/counter/FormCounter.vue"),
    meta: {
      title: "Form Registrasi Loket",
      icon: "fas fa-box-open", // Font Awesome icon class
    },
    children: [],
  },
];
