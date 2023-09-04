export default [
  {
    path: "/patient",
    name: "Patient",
    component: () => import("@/pages/patient/PatientPage.vue"),
    meta: {
      icon: "fas fa-user-injured",
      layout: "default",
      title: "Pasien",
      middleware: ["auth"],
    },
  },
  {
    path: "/patient/create",
    name: "PatientCreate",
    component: () => import("@/pages/patient/FormPatient.vue"),
    meta: {
      layout: "default",
      title: "Tambah Pasien",
      icon: "fas fa-user-injured",
      middleware: ["auth"],
    },
  },
  {
    path: "/patient/edit/:id",
    name: "PatientEdit",
    component: () => import("@/views/patient/PatientEdit.vue"),
    meta: {
      layout: "default",
      middleware: ["auth"],
    },
  },
];
