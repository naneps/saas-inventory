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
          name: "id",
          required: true,
          label: "ID",
          align: "left",
          field: (row) => row.id,
          format: (val) => `${val}`,
          sortable: true,
        },
        {
          name: "name",
          align: "left",
          label: "Name",
          field: "name",
          sortable: true,
        },
        {
          name: "price",
          label: "Price",
          field: "price",
          sortable: true,
        },
        {
          name: "actions",
          label: "Actions",
          field: "actions",
        },
      ],
      products: [
        { id: 1, name: "Product 1", price: 10.99 },
        { id: 2, name: "Product 2", price: 20.99 },
        { id: 3, name: "Product 3", price: 5.99 },
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
