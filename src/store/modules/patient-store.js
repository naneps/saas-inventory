import { defineStore } from "pinia";

export const usePatientStore = defineStore("patient", {
  state() {
    return {
      patients: [
        {
          name: "John Doe",
          phone: "123-456-7890",
          address: "123 Main Street",
          gender: "Male",
        },
        {
          name: "Jane Smith",
          phone: "555-555-5555",
          address: "456 Elm Avenue",
          gender: "Female",
        },
        {
          name: "Bob Johnson",
          phone: "987-654-3210",
          address: "789 Oak Lane",
          gender: "Male",
        },
        {
          name: "Alice Brown",
          phone: "555-123-7890",
          address: "321 Pine Road",
          gender: "Female",
        },
        {
          name: "Mike Wilson",
          phone: "777-888-9999",
          address: "555 Cedar Drive",
          gender: "Male",
        },
      ],

      tableColumns: [
        {
          key: "name",
          label: "Nama",
          align: "left",
        },
        {
          key: "phone",
          label: "No. HP",
        },
        {
          key: "address",
          label: "Alamat",
        },
        {
          key: "gender",
          label: "Jenis Kelamin",
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
