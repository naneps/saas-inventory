<template>
  <reusable-section title="Registrasi Loket">
    <Row>
      <Col>
        <Card>
          <template #header>
            <h4></h4>
            <div class="card-header-action">
              <router-link to="/registrasi-loket/formulir">
                <Button type="primary" icon="fas fa-plus" label="Input Data" />
              </router-link>
            </div>
          </template>
          <ReusableTable
            :columns="counterStore.tableColumns"
            :rows="counterStore.results"
            has-number
          />
        </Card>
      </Col>
    </Row>
  </reusable-section>
</template>
<script setup>
import {
  Card,
  Col,
  ReusableSection,
  Row,
  Button,
  ReusableTable,
} from "@/components";
import { useCounterStore } from "@/store/modules/counter-store";
const counterStore = useCounterStore();
</script>
<style></style>
