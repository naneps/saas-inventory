<template>
  <reusable-section title="Form Pendaftaran">
    <Row>
      <Col lg="8">
        <Card :hasHeader="false">
          <Row>
            <Col lg="8">
              <input-field
                label="ID Periksa"
                input-id="idCheck"
                name="idCheck"
                :hasIcon="false"
              />
              <input-field
                label="Tanggal Periksa"
                input-id="dateCheck"
                name="dateCheck"
                :hasIcon="false"
                type="date"
              />
              <select-option
                label="Dokter Pemeriksa"
                name="dokterCheck"
                :options="[
                  {
                    label: 'Hakim Asrori',
                    value: 1,
                  },
                ]"
              />
            </Col>
            <Col lg="4">
              <select-option
                label="No Loket"
                name="loketNumber"
                :options="[
                  {
                    label: '001',
                    value: '001',
                  },
                ]"
                @update:value="counter.loketNumber = $event"
              />
              <Card
                class="bg-primary text-center"
                :hasHeader="false"
                :hasFooter="false"
              >
                <h3 class="m-0">{{ counter.loketNumber }}-07113</h3>
              </Card>
            </Col>
          </Row>

          <hr />

          <Row>
            <Col lg="12">
              <input-field
                label="No Rekmed"
                input-id="idCheck"
                name="idCheck"
                :hasIcon="false"
              />
              <input-field
                label="Nama Pasien"
                input-id="idCheck"
                name="idCheck"
                :hasIcon="false"
              />
              <input-field
                label="Alamat"
                input-id="idCheck"
                name="idCheck"
                :hasIcon="false"
              />
              <select-option
                label="Jenis Kelamin"
                name="loketNumber"
                :options="[
                  {
                    label: 'Laki-laki',
                    value: 'Laki-laki',
                  },
                  {
                    label: 'Perempuan',
                    value: 'Perempuan',
                  },
                ]"
              />
              <input-field
                label="Tanggal Lahir"
                input-id="dateCheck"
                name="dateCheck"
                :hasIcon="false"
                type="date"
              />
              <select-option
                label="Pekerjaan"
                name="loketNumber"
                :options="[
                  {
                    label: 'PNS',
                    value: 'PNS',
                  },
                  {
                    label: 'Wiraswasta',
                    value: 'Wiraswasta',
                  },
                ]"
              />
              <input-field
                label="No. Telepon"
                input-id="dateCheck"
                name="dateCheck"
                :hasIcon="false"
              />
              <input-field
                label="Tanggal Gabung"
                input-id="dateCheck"
                name="dateCheck"
                :hasIcon="false"
                type="date"
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
        <Card :hasHeader="false" :hasFooter="false">
          <div class="form-group">
            <label class="d-block">Foto Pasien</label>
            <div class="d-flex justify-content-between">
              <button class="btn btn-primary" @click="openCamera">
                Buka Kamera
              </button>
              <button class="btn btn-warning text-white" @click="stopCamera">
                Tutup Kamera
              </button>
            </div>
            <video
              ref="videoElement"
              autoplay
              style="height: 300px; width: 100%"
            ></video>
          </div>
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
} from "@/components/index";
import { useCategoryStore } from "@/store/modules/category-store";
import { useUnitStore } from "@/store/modules/unit-store";
import { ref } from "vue";

const counter = ref({
  loketNumber: "001",
});

const videoElement = ref(null);
let stream = null;

const openCamera = async () => {
  try {
    stream = await navigator.mediaDevices.getUserMedia({ video: true });

    videoElement.value.srcObject = stream;
  } catch (error) {
    console.error("Error accessing the camera:", error);
  }
};

const stopCamera = async () => {
  if (stream) {
    stream.getTracks().forEach((track) => track.stop());
    videoElement.value.srcObject = null;
  }
};
</script>
<style scoped>
.form-group {
  margin-bottom: 1rem;
}
</style>
