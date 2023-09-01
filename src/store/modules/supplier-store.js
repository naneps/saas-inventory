import { defineStore } from "pinia";
export const useSupplierStore = defineStore("supplier", {
  state() {
    return {
      pagination: {
        page: 1,
        perPage: 5,
        total: 5,
        currentPage: 1,
      },
      columns: [
        {
          key: "name",
          label: "Nama",
          align: "left",
          sortable: true,
        },
        {
          key: "address",
          label: "Alamat",
          align: "left",
          sortable: true,
        },
        {
          key: "phone",
          label: "Telepon",
          align: "left",
          sortable: true,
        },
        {
          key: "actions",
          label: "Actions",
          align: "center",
          type: "actions",
          actions: ["Detail", "Edit", "Delete"],
        },
      ],
      suppliers: [
        {
          name: "Supplier 1",
          address: "Jl. Raya",
          phone: "08123456789",
        },
        {
          name: "Supplier 2",
          address: "Jl. Raya",
          phone: "08123456789",
        },
        {
          name: "Supplier 3",
          address: "Jl. Raya",
          phone: "08123456789",
        },
      ],
    };
  },
  actions: {},
  getters: {},
});
