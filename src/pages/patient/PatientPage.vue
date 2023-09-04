<template>
  <reusable-section title="Pasien">
    <Row>
      <Col>
        <Card>
          <template #header>
            <h4>Data Pasien</h4>
            <div class="card-header-action">
              <Button
                type="primary"
                icon="fas fa-plus"
                label="Tambah Pasien"
                @click="$router.push('/patient/create')"
              />
            </div>
          </template>
          <Row>
            <Col lg="3">
              <InputSearch placeholder="Cari Pasien" />
            </Col>
          </Row>
          <ReusableTable
            :columns="patientStore.tableColumns"
            :rows="patientStore.patients"
            has-number
          />
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
  InputSearch,
  ReusableSection,
  ReusableTable,
  Row,
} from "@/components";
import { usePatientStore } from "@/store/modules/patient-store";
const patientStore = usePatientStore();
</script>
<style></style>
