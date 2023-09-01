<template>
  <Card v-show="unitStore.showForm">
    <template #header>
      <h4>Form Satuan</h4>
      <div class="card-header-action">
        <Button
          @click="unitStore.toggleForm"
          type="danger"
          outline
          icon="fa fa-chevron-right"
        />
      </div>
    </template>
    <InputField
      label="Nama Satuan"
      name="name"
      input-id="name"
      placeholder="Masukkan nama satuan"
      :value="unitStore.unit.name"
      @update:value="unitStore.unit.name = $event"
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
import { useUnitStore } from "../../store/modules/unit-store";
const unitStore = useUnitStore();

watch(
  () => unitStore.showForm,
  (value) => {
    console.log(value);
    if (value === false) {
      unitStore.unit.name = "";
    }
    console.log(unitStore.unit);
  }
);
</script>

<style>
</style>
