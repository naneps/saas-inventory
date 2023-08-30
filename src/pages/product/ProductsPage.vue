<template>
  <reusable-section
    :title="title"
    :sub-title="subTitle"
    :card-title="cardTitle"
  >
    <div class="card">
      <div class="card-header">
        <h4>Data Obat</h4>
      </div>
      <div class="card-body">
        <div class="row">
          <div class="col-12 mb-4">
            <router-link to="/product/create">
              <button class="btn btn-primary">
                <i class="fas fa-plus"></i> Tambah Obat
              </button>
            </router-link>
          </div>
        </div>
        <div class="row">
          <div class="col-12">
            <reusable-table
              :columns="columns"
              :rows="rows"
              :selectable="true"
              :selected="selected"
              :has-number="true"
              :current-page="currentPage"
              :page-size="productStore.pagination.perPage"
            ></reusable-table>
          </div>
        </div>
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
const productStore = useProductStore();
const columns = productStore.tableColumns;
const rows = productStore.products;
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