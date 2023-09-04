<template >
  <reusable-section title="Tambah Pasien">
    <Row>
      <Col lg="6">
        <Card>
          <template #header>
            <h4>Form Pasien</h4>
          </template>
          <Row>
            <Col>
              <InputField
                label="Nama"
                type="text"
                placeholder="Masukan nama pasien"
              />
            </Col>
            <Col>
              <InputField
                label="Nomor Telepon"
                type="text"
                placeholder="Masukan Nomor Telepon Pasien"
              />
            </Col>
            <Col>
              <InputField
                label="Alamat"
                type="text"
                placeholder="Alamat Pasien"
              />
            </Col>
            <Col>
              <SelectOption
                label="Jenis Kelamin"
                :options="[
                  { value: '1', label: 'Laki-laki' },
                  { value: '2', label: 'Perempuan' },
                ]"
                placeholder="Jenis Kelamin"
              />
            </Col>
          </Row>
          <template #footer>
            <Button type="primary" icon="fas fa-plus" label="Simpan" block />
            <Button
              type="danger"
              label="Batal"
              outline
              icon="fas fa-times"
              @click="$router.back()"
              block
            />
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
  SelectOption,
} from "@/components";
</script>
<style >
</style>