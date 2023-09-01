<template >
  <reusable-section title="Tambah Supplier">
    <Row>
      <Col>
        <Card>
          <template #header>
            <h4>Form Supplier</h4>
          </template>
          <Row>
            <Col>
              <input-field
                label="Nama Supplier"
                input-id="name"
                name="name"
                @update:value="supplier.name = $event"
                :hasIcon="true"
                icon="fas fa-user"
              />
            </Col>
            <Col>
              <input-field
                label="Alamat"
                input-id="address"
                name="address"
                @update:value="supplier.address = $event"
                :hasIcon="true"
                icon="fas fa-map-marker-alt"
              />
            </Col>
            <Col>
              <input-field
                label="No. Telepon"
                input-id="phone"
                name="phone"
                @update:value="supplier.phone = $event"
                :hasIcon="true"
                icon="fas fa-phone"
              />
            </Col>
          </Row>
          <template #footer>
            <Button type="success" block icon="fa fa-save">Simpan</Button>
            <Button
              type="danger"
              block
              outline
              icon="fa fa-times"
              @click="this.$router.back()"
              >Batal</Button
            >
            >
          </template>
        </Card>
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
} from "@/components/index";
import { useSupplierStore } from "@/store/modules/supplier-store";
const supplierStore = useSupplierStore();
</script>
<style >
</style>