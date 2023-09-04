<template>
  <reusable-section title="Tambah Pasien">
    <Row>
      <Col>
        <Card>
          <template #header>
            <h4>Form Pasien</h4>
          </template>
          <Row>
            <Col lg="6">
              <Row>
                <Col lg="6">
                  <input-field
                    label="Tanggal"
                    type="date"
                    placeholder="Tanggal"
                  />
                </Col>
                <Col lg="6">
                  <input-field label="Tempo" type="date" placeholder="Tempo" />
                </Col>
                <Col lg="12">
                  <input-field
                    label="Keterangan"
                    type="textarea"
                    placeholder="Keterangan"
                  />
                </Col>
              </Row>
            </Col>
            <Col lg="6">
              <Row>
                <Col lg="6">
                  <input-field
                    label="Tanggal"
                    type="date"
                    placeholder="Tanggal"
                  />
                </Col>
                <Col lg="6">
                  <input-field label="Tempo" type="date" placeholder="Tempo" />
                </Col>
                <Col lg="12">
                  <input-field
                    label="Keterangan"
                    type="textarea"
                    placeholder="Keterangan"
                  />
                </Col>
              </Row>
            </Col>
          </Row>
        </Card>
      </Col>
    </Row>
  </reusable-section>
</template>
<script setup>
import { Card, Col, InputField, ReusableSection, Row } from "@/components";
</script>
<style>
</style>