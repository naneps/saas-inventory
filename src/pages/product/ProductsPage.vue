<template>
  <reusable-section
    :title="title"
    :sub-title="subTitle"
    :lead-text="leadText"
    :card-title="cardTitle"
  >
    <div class="card">
      <div class="card-header">
        <h4>Advanced Table</h4>
        <div class="card-header-form">
          <form>
            <div class="input-group">
              <input type="text" class="form-control" placeholder="Search" />
              <div class="input-group-btn">
                <button class="btn btn-primary">
                  <i class="fas fa-search"></i>
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
      <div class="card-body p-0">
        <reusable-table
          :columns="columns"
          :rows="rows"
          :selectable="false"
          :selected="selected"
        ></reusable-table>
      </div>
      <div class="card-footer">
        <Pagination
          :currentPage="currentPage"
          :totalPageCount="totalPageCount"
          @page-change="handlePageChange"
        />
      </div>
    </div>
  </reusable-section>
</template>
<script setup>
import Pagination from "@/components/Pagination.vue";
import ReusableSection from "@/components/ReusableSection.vue";
import ReusableTable from "@/components/ReusableTable.vue";
import { useProductStore } from "@/store/modules/product-store";
import { ref } from "vue";
const columns = ref([
  { key: "id", label: "ID" },
  { key: "name", label: "Name" },
  { key: "price", label: "Price" },
  { key: "category", label: "Category" },
  { key: "category", label: "Category" },
  { key: "category", label: "Category" },
  { key: "category", label: "Category" },
  { key: "category", label: "Category" },
  {
    key: "action",
    label: "Action",
    type: "actions",
    align: "center",
    actions: ["Edit", "View Details", "Delete"],
  },
]);
const rows = ref([
  {
    id: 1,
    price: "$100",
    name: "Product 1",
    category: "Category 1",
  },
  {
    id: 2,
    price: "$100",
    category: "Category 2",
    name: "Product 2",
  },
  {
    id: 3,
    name: "Product 3",
    price: "$100",
    category: "Category 3",
  },
  {
    id: 4,
    name: "Product 4",
    price: "$100",
    category: "Category 4",
  },
  {
    id: 5,
    name: "Product 5",
    price: "$100",
    category: "Category 5",
  },
  {
    id: 6,
    name: "Product 6",
    price: "$100",
    category: "Category 6",
  },
  {
    id: 7,
    name: "Product 7",
    price: "$100",
    category: "Category 7",
  },
  {
    id: 8,
    name: "Product 8",
    price: "$100",
    category: "Category 8",
    action: "Edit | Delete",
  },
  {
    id: 9,
    name: "Product 9",
    price: "$100",
    category: "Category 9",
    action: "Edit | Delete",
  },
  {
    id: 10,
    name: "Product 10",
    price: "$100",
    category: "Category 10",
    action: "Edit | Delete",
  },
]);
const productStore = useProductStore();
const currentPage = ref(productStore.pagination.currentPage);
const totalPageCount = ref(productStore.pagination.totalPageCount);
const selected = ref([]);
const title = ref("Produk");
const subTitle = ref("Produk");
const leadText = ref("Produk");
const cardTitle = ref("Produk");
</script>
<style>
</style>