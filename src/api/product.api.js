import Api from "@/api/api";
Api.init();
const ProductApi = {
  getAllProducts(params) {
    return Api.get("products", params);
  },

  getProductById(productId) {
    return Api.get(`products/${productId}`);
  },

  createProduct(productData, file) {
    if (file) {
      const formData = new FormData();
      formData.append("file", file);
      formData.append("name", productData.name);
      formData.append("price", productData.price);
      return Api.postFormData("products", formData);
    } else {
      return Api.post("products", productData);
    }
  },

  updateProduct(productId, productData) {
    return Api.put(`products/${productId}`, productData);
  },

  deleteProduct(productId) {
    return Api.delete(`products/${productId}`);
  },
};

export default ProductApi;
