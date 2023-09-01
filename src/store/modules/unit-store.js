import { defineStore } from "pinia";

export const useUnitStore = defineStore("unit", {
  state() {
    return {
      showForm: false,
      unit: {
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
      units: [
        {
          id: 1,
          name: "Box",
        },
        {
          id: 2,
          name: "Botol",
        },
        {
          id: 3,
          name: "Strip",
        },
      ],
    };
  },
  actions: {
    toggleForm() {
      this.showForm = !this.showForm;
    },
    setUnitName(name) {
      this.unit.name = name;
    },
  },
  getters: {
    unitById: (state) => (id) => {
      return state.units.find((unit) => unit.id === id);
    },
  },
});
