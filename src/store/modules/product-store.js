import { defineStore } from "pinia";

export const useProductStore = defineStore({
  id: "product",
  state() {
    return {
      pagination: {
        page: 1,
        perPage: 5,
        total: 10,
        currentPage: 1,
      },
      tableColumns: [
        {
          key: "name",
          label: "Name",
          align: "left",
          sortable: true,
        },
        {
          key: "category",
          label: "Kategori",
          sortable: true,
        },
        {
          key: "unit",
          label: "Satuan",
          sortable: true,
        },
        {
          key: "stock",
          label: "Stok",
          sortable: true,
        },

        {
          key: "price",
          label: "Harga",
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
      products: [
        {
          id: 1,
          name: "Paracetamol",
          category: "Obat",
          unit: "Box",
          stock: 10,
          price: 10000,
        },
        {
          id: 2,
          name: "Amoxicillin",
          category: "Obat",
          unit: "Bottle",
          stock: 5,
          price: 15000,
        },
        {
          id: 3,
          name: "Ibuprofen",
          category: "Obat",
          unit: "Box",
          stock: 20,
          price: 8000,
        },
        {
          id: 4,
          name: "Cough Syrup",
          category: "Obat",
          unit: "Bottle",
          stock: 15,
          price: 12000,
        },
        // Add more dummy data if needed
      ],
    };
  },

  actions: {
    addProduct(product) {
      // Simulate API request
      return new Promise((resolve) => {
        setTimeout(() => {
          this.products.push(product);
          resolve();
        }, 500);
      });
    },
    updateProduct(updatedProduct) {
      // Simulate API request
      return new Promise((resolve) => {
        setTimeout(() => {
          const index = this.products.findIndex(
            (p) => p.id === updatedProduct.id
          );
          if (index !== -1) {
            this.products[index] = updatedProduct;
          }
          resolve();
        }, 500);
      });
    },
    deleteProduct(productId) {
      // Simulate API request
      return new Promise((resolve) => {
        setTimeout(() => {
          this.products = this.products.filter((p) => p.id !== productId);
          resolve();
        }, 500);
      });
    },
  },
  getters: {
    getProductById(productId) {
      return this.products.find((p) => p.id === productId);
    },
    getAllProducts() {
      return this.products;
    },
  },
});
