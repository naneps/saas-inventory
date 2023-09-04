<template>
  <reusable-section title="Alur Kas">
    <Row>
      <Col lg="6">
        <Card>
          <template #header>
            <h4>Form Alur Kas</h4>
          </template>
          <Row>
            <Col>
              <InputField label="Tanggal" type="date" placeholder="Tanggal" />
            </Col>
            <Col>
              <InputField
                label="Deskripsi"
                type="text"
                placeholder="Deskripsi"
              />
            </Col>
            <Col>
              <SelectOption
                label="Jenis Transaksi"
                :options="[
                  { value: '1', label: 'Pemasukan' },
                  { value: '2', label: 'Pengeluaran' },
                ]"
              />
            </Col>
            <Col>
              <InputField label="Jumlah" type="number" placeholder="Jumlah" />
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
      <Col lg="6">
        <Card>
          <template #header>
            <h4>Riwayat Alur Kas</h4>
          </template>
          <ul class="list-unstyled list-unstyled-border">
            <media
              v-for="transaction in cashFlowStore.transactions"
              :key="transaction"
              :title="forMatCurrency(transaction.amount)"
              :sideTitle="transaction.date"
            >
              <template #leading>
                <div class="leading">
                  <i
                    class="fas fa-arrow-up text-success"
                    v-if="transaction.type === 'income'"
                  ></i>
                  <i
                    class="fas fa-arrow-down text-danger"
                    v-else-if="transaction.type === 'expense'"
                  ></i>
                </div>
              </template>
              <template #content>
                <p>{{ transaction.description }}</p>
                <span> Oleh : Ahmad Sapudin </span>
              </template>
            </media>
          </ul>
          <template v-if="cashFlowStore.transactions.length > 0" #footer>
            <div class="card-footer pt-3 d-flex justify-content-center">
              <div class="budget-price justify-content-center">
                <div class="leading">
                  <i class="fas fa-arrow-up text-success"></i>
                </div>
                <div class="budget-price-label">Pemasukan</div>
              </div>
              <div class="budget-price justify-content-center">
                <div class="leading">
                  <i class="fas fa-arrow-down text-danger"></i>
                </div>
                <div class="budget-price-label">Pengeluaran</div>
              </div>
            </div>
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
  Media,
  ReusableSection,
  Row,
  SelectOption,
} from "@/components";
import { useCashFlowStore } from "@/store/modules/cashFlow-store";
const cashFlowStore = useCashFlowStore();
const forMatCurrency = (value) => {
  return new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
    maximumFractionDigits: 0,
  }).format(value);
};
</script>
<style scoped>
.leading {
  width: 3rem;
  height: 3rem;
  border-radius: 10%;
  margin: 0 1rem 0 0;
  border: 1px solid #e6e6e6;
  align-content: center;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 2rem;
}
</style>