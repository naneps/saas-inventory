export default [
  {
    name: "Alur Kas",
    path: "/cash-flow",
    component: () => import("@/pages/cash-flow/CashFlowPage.vue"),
    meta: {
      title: "Alur Kas",
      icon: "fas fa-money-check-alt", // Font Awesome icon class
    },
  },
];
