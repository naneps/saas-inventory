<template>
  <reusable-section title="Tambah Data OBat">
    <div class="row">
      <div class="col-lg-8">
        <div class="card">
          <div class="card-header">
            <h4>Form Data Obat</h4>
          </div>
          <div class="card-body">
            <input-field
              label="Nama Obat"
              input-id="nama_obat"
              name="nama_obat"
              :validator="required"
              :validation-message="requiredMessage"
              :is-required="true"
            ></input-field>
            <input-field
              label="Kode Obat"
              input-id="kode_obat"
              name="kode_obat"
              :validator="required"
              :validation-message="requiredMessage"
              :is-required="true"
            ></input-field>
            <input-field
              label="Harga Obat"
              input-id="harga_obat"
              name="harga_obat"
              :validator="required"
              :validation-message="requiredMessage"
              :is-required="true"
            ></input-field>
            <input-field
              label="Stok Obat"
              input-id="stok_obat"
              name="stok_obat"
              :validator="required"
              :validation-message="requiredMessage"
              :is-required="true"
            ></input-field>
          </div>
          <div class="card-footer">
            <div class="row">
              <div class="col-lg-6">
                <button class="btn btn-icon btn-primary btn-block">
                  Simpan
                </button>
              </div>
              <div class="col-lg-6">
                <button class="btn btn-icon btn-danger btn-block">Batal</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </reusable-section>
</template>
<script setup>
import InputField from "@/components/InputField.vue";
import ReusableSection from "@/components/ReusableSection.vue";
</script>
<style >
</style>