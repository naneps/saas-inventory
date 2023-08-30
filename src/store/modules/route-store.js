import { defineStore } from "pinia";

export const useRouteStore = defineStore("routeStore", {
  state: () => ({
    routes: [
      {
        name: "Loket",
        path: "/loket",
        icon: "fa-hospital",
      },
      {
        name: "Dokter",
        path: "/dokter",
        icon: "fa-user-md",
      },
      {
        name: "Pegawai",
        path: "/pegawai",
        icon: "fa-user",
      },
      {
        name: "Registrasi Loket",
        path: "/registrasi-loket",
        icon: "fa-clipboard",
      },
      {
        name: "Pasien",
        path: "/pasien",
        icon: "fa-user-injured",
      },
      {
        name: "Supplier",
        path: "/supplier",
        icon: "fa-truck",
      },
      {
        name: "Produk",
        path: "/produk",
        icon: "fa-shopping-cart",
      },
      {
        name: "Pemeriksaan",
        path: "/pemeriksaan",
        icon: "fa-stethoscope",
      },
      {
        name: "Loket Pembayaran",
        path: "/loket-pembayaran",
        icon: "fa-money-check-alt",
      },
      {
        name: "Pembelian",
        path: "/pembelian",
        icon: "fa-shopping-basket",
      },
      {
        name: "Kepegawaian",
        path: "/kepegawaian",
        icon: "fa-users",
      },
      {
        name: "Layanan",
        path: "/layanan",
        icon: "fa-cogs",
      },
      {
        name: "Cash Flow",
        path: "/cash-flow",
        icon: "fa-money-bill-wave",
      },
      {
        name: "Laporan",
        path: "/laporan",
        icon: "fa-file-alt",
      },
    ],

    features: [
      {
        name: "Registrasi Loket",
        path: "/registrasi-loket",
        image: "src/assets/img/menu/registrasi-loket.jpg",
      },
      {
        name: "Pemeriksaan",
        path: "/pemeriksaan",
        image: "src/assets/img/menu/pemeriksaan.jpg",
      },
      {
        name: "Loket Pembayaran",
        path: "/loket-pembayaran",
        image: "src/assets/img/menu/loket-pembayaran.jpg",
      },
      {
        name: "Pembelian",
        path: "/pembelian",
        image: "src/assets/img/menu/pembelian.jpg",
      },
      {
        name: "Kepegawaian",
        path: "/kepegawaian",
        image: "src/assets/img/menu/kepegawaian.jpg",
      },

      {
        name: "Cash Flow",
        path: "/cash-flow",
        image: "src/assets/img/menu/cash-flow.jpg",
      },

      {
        name: "Supplier",
        path: "/supplier",
        image: "src/assets/img/menu/supplier.jpg",
      },
      {
        name: "Pegawai",
        path: "/pegawai",
        image: "src/assets/img/menu/pegawai.jpg",
      },
      {
        name: "Pasien",
        path: "/pasien",
        image: "src/assets/img/menu/pasien.jpg",
      },
      {
        name: "Produk",
        path: "/product",
        image: "src/assets/img/menu/produk.jpg",
      },
      {
        name: "Layanan",
        path: "/layanan",
        image: "src/assets/img/menu/layanan.jpg",
      },
      {
        name: "Laporan",
        path: "/laporan",
        image: "src/assets/img/menu/laporan.jpg",
      },
    ],
  }),

  getters: {
    getRoutes() {
      return this.routes;
    },
  },
  actions: {
    setRoutes(routes) {
      this.routes = routes;
    },
  },
});
