import { defineStore } from "pinia";

export const useCounterStore = defineStore("counter", {
  state() {
    return {
      results: [
        {
          idCheck: "PR120092001",
          rekmed: "02991028",
          name: "Hakim Asrori",
          gender: "Laki-laki",
          age: "30",
          address: "Losarang Indramayu",
        },
      ],
      tableColumns: [
        {
          key: "idCheck",
          label: "ID Periksa",
          align: "left",
        },
        {
          key: "rekmed",
          label: "No. Rekmed",
        },
        {
          key: "name",
          label: "Nama Pasien",
        },
        {
          key: "gender",
          label: "Jenis Kelamin",
        },
        {
          key: "age",
          label: "Umur",
        },
        {
          key: "address",
          label: "Alamat",
        },
        {
          key: "actions",
          label: "Actions",
          align: "center",
          type: "actions",
          actions: ["Detail", "Edit", "Delete"],
        },
      ],
    };
  },
});
