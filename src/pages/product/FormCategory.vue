<template>
  <Card v-show="categoryStore.showForm">
    <template #header>
      <h4>Form Kategori</h4>
      <div class="card-header-action">
        <Button
          @click="categoryStore.toggleForm"
          type="danger"
          outline
          icon="fa fa-chevron-right"
        />
      </div>
    </template>
    {{ categoryStore.category }}
    <InputField
      label="Nama Kategori"
      name="name"
      input-id="name"
      placeholder="Masukkan nama Kategori"
      :value="categoryStore.category.name"
      @update:value="categoryStore.category.name = $event"
    />
    <template #footer>
      <button class="btn btn-icon btn-primary btn-block">Simpan</button>
      <button class="btn btn-icon btn-danger btn-block">Batal</button>
    </template>
  </Card>
</template>

<script setup>
import { Button, Card, InputField } from "@/components/index";
import { defineProps, watch } from "vue";
import { useCategoryStore } from "../../store/modules/category-store";
const categoryStore = useCategoryStore();

watch(
  () => categoryStore.showForm,
  (value) => {
    console.log(value);
    if (value === false) {
      categoryStore.category.name = "";
    }
  }
);
</script>

<style>
</style>
