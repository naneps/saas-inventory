<template>
  <reusable-section title="Tambah Data Obat">
    <Row>
      <Col lg="8">
        <Card>
          <template #header>
            <h4>Form Obat</h4>
          </template>
          <Row>
            <Col lg="6">
              <input-field
                label="Nama Obat"
                input-id="name"
                name="name"
                @update:value="product.name = $event"
                :hasIcon="true"
                icon="fas fa-capsules"
              />
              <input-field
                label="Kode Obat"
                input-id="code"
                name="code"
                @update:value="product.code = $event"
                :hasIcon="true"
                icon="fas fa-barcode"
              />
              <select-option
                label="Kategori"
                name="category"
                :options="categories"
                @update:value="product.category = $event"
              />
              <select-option
                label="Satuan"
                name="unit"
                :options="units"
                @update:value="product.unit = $event"
              />
            </Col>
            <Col lg="6">
              <input-field
                label="Stok"
                input-id="stock"
                name="stock"
                @update:value="product.stock = $event"
                :hasIcon="true"
                icon="fas fa-boxes"
              />
              <input-field
                label="Harga"
                input-id="price"
                name="price"
                @update:value="product.price = $event"
                :hasIcon="true"
                icon="fas fa-money-bill-wave"
              />
              <!-- harga resep -->
              <!-- harga non resep -->
              <input-field
                label="Harga Resep"
                input-id="price"
                name="price"
                @update:value="product.price_recipe = $event"
                :hasIcon="true"
                icon="fas fa-money-bill-wave"
              />
              <input-field
                label="Harga Non Resep"
                input-id="price"
                name="price"
                @update:value="product.price_non_recipe = $event"
                :hasIcon="true"
                icon="fas fa-money-bill-wave"
              />
            </Col>
          </Row>

          <template #footer>
            <Button label="Simpan" type="success" icon="fa fa-save" block />
            <Button
              label="Batal"
              type="danger"
              outline
              icon="fa fa-times"
              block
            />
          </template>
        </Card>
      </Col>
      <Col lg="4">
        <Row>
          <Col lg="12">
            <card>
              <template #header>
                <h4>
                  <i class="fas fa-info-circle"></i> Satuan dan Kategori Obat
                </h4>
              </template>
              <!-- make button for add satuan -->
              <!-- make button for add kategori -->
              <Button
                :label="
                  unitStore.showForm ? 'Batal Tambah Satuan' : 'Tambah Satuan'
                "
                :type="unitStore.showForm ? 'danger' : 'primary'"
                outline
                block
                :icon="
                  unitStore.showForm ? 'fa fa-chevron-right' : 'fa fa-plus'
                "
                @click="unitStore.toggleForm"
              />
              <Button
                :label="
                  categoryStore.showForm ? 'Batal Tambah ' : 'Tambah Kategori'
                "
                :type="categoryStore.showForm ? 'danger' : 'primary'"
                outline
                block
                :icon="
                  categoryStore.showForm ? 'fa fa-chevron-right' : 'fa fa-plus'
                "
                @click="categoryStore.toggleForm"
              />
              <template #footer> </template>
            </card>
          </Col>
          <Col id="for-form-unit-category" lg="12">
            <FormUnit />
            <FormCategory />
          </Col>
        </Row>
      </Col>
    </Row>
  </reusable-section>
</template>
<script setup>
import {
  Button,
  Card,
  Col,
  InputField,
  ReusableSection,
  Row,
  SelectOption,
} from "@/components/index";
import { useCategoryStore } from "@/store/modules/category-store";
import { useProductStore } from "@/store/modules/product-store";
import { useUnitStore } from "@/store/modules/unit-store";
import { ref } from "vue";
import FormCategory from "./FormCategory.vue";
import FormUnit from "./FormUnit.vue";
const unitStore = useUnitStore();
const categoryStore = useCategoryStore();
const productStore = useProductStore();

const product = ref({
  name: "",
  code: "",
  price: 0,
  stock: 0,
  unit: "",
  category: "",
  price_recipe: 0,
  price_non_recipe: 0,
});
const categories = categoryStore.categories;
const units = unitStore.units;
</script>
<style >
</style>