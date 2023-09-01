<template>
  <ReusableSection :title="'Loket Pembayaran'">
    <Row>
      <Col lg="8">
        <Card>
          <template #header>
            <h4>Form Pembayaran</h4>
          </template>
        </Card>
      </Col>
      <Col lg="4">
        <Card>
          <template #header>
            <h4>Detail Pembayaran</h4>
          </template>
          <!-- make invoice -->
          <!-- make total -->
          <!-- make button for print -->
          <!-- make button for save -->
        </Card>
      </Col>
    </Row>
  </ReusableSection>
</template>

<script setup>
import { Card, Col, ReusableSection, Row } from "@/components";
</script>

<style>
/* Your styles here */
</style>
