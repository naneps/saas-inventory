<template>
  <reusable-section title="Supplier">
    <Row>
      <Col lg="12">
        <Card>
          <template #header>
            <h4 class="card-title">Data Supplier</h4>
            <div class="card-header-action">
              <router-link to="/supplier/create">
                <button class="btn btn-primary btn-rounded">
                  <i class="fas fa-plus"></i> Tambah Supplier
                </button>
              </router-link>
            </div>
          </template>
          <Row class="my-2">
            <Col lg="4">
              <!-- search -->
              <div class="input-group mb-3">
                <input
                  type="text"
                  class="form-control"
                  placeholder="Cari Supplier"
                />
                <div class="input-group-append">
                  <button class="btn btn-primary btn-icon" type="button">
                    <i class="fas fa-search"></i>
                  </button>
                </div>
              </div>
            </Col>
            <Col lg="1">
              <select-option
                :hasLabel="false"
                name="perPage"
                :options="[
                  { label: '10', value: 10 },
                  { label: '20', value: 20 },
                  { label: '30', value: 30 },
                ]"
              />
            </Col>
          </Row>
          <Row>
            <Col>
              <ReusableTable
                :columns="supplierStore.columns"
                :rows="supplierStore.suppliers"
                page-size="10"
                current-page="1"
                :hasNumber="true"
              />
            </Col>
          </Row>
          <template #footer>
            <Pagination
              :currentPage="supplierStore.pagination.currentPage"
              :totalPageCount="supplierStore.pagination.total"
              @page-change="handlePageChange"
            />
          </template>
        </Card>
      </Col>
    </Row>
  </reusable-section>
</template>
<script setup>
import {
  Card,
  Col,
  Pagination,
  ReusableSection,
  ReusableTable,
  Row,
  SelectOption,
} from "@/components/index";
import { useSupplierStore } from "@/store/modules/supplier-store";
const supplierStore = useSupplierStore();
const rows = supplierStore.suppliers;
</script>
<style>
</style>