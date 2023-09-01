import { defineStore } from "pinia";

export const useCategoryStore = defineStore("category", {
  state() {
    return {
      showForm: false,
      category: {
        id: "",
        name: "",
      },
      pagination: {
        page: 1,
        perPage: 5,
        total: 10,
        currentPage: 1,
      },
      tableColumns: [
        {
          key: "name",
          label: "Nama",
          align: "left",
          sortable: true,
        },
        {
          key: "actions",
          label: "Actions",
          align: "center",
          type: "actions",
          actions: ["Edit", "Delete"],
        },
      ],
      categories: [
        {
          id: 1,
          name: "Oba Keras",
        },
        {
          id: 2,
          name: "Obat Bebas",
        },
        {
          id: 3,
          name: "Obat Bebas Terbatas",
        },
      ],
    };
  },
  actions: {
    toggleForm() {
      this.showForm = !this.showForm;
    },
  },
});
