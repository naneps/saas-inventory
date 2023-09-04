<template>
  <ReusableSection :title="'Loket Pembayaran'">
    <Row>
      <Col lg="4">
        <Card>
          <template #header>
            <h4>Data Obat</h4>
          </template>
          <InputSearch placeholder="Cari Obat" />
          <Row>
            <transition name="slide">
              <Col>
                <div>
                  <h6>Pilih Obat</h6>
                </div>
                <ReusableTable
                  tableId="product-table"
                  :columns="[
                    {
                      key: 'name',
                      label: 'Name',
                      align: 'left',
                      sortable: true,
                    },
                    {
                      key: 'category',
                      label: 'Kategori',
                      sortable: true,
                    },
                    {
                      key: 'unit',
                      label: 'Satuan',
                      sortable: true,
                    },
                    {
                      key: 'stock',
                      label: 'Stok',
                      sortable: true,
                    },

                    {
                      key: 'price',
                      label: 'Harga',
                      sortable: true,
                    },
                  ]"
                  :rows="productStore.products"
                  @onSelect="handleSelect($event)"
                  :selectable="true"
                />
              </Col>
            </transition>
          </Row>
        </Card>
      </Col>
      <Col lg="8">
        <Card>
          <template #header>
            <h4>
              Transaksi
              <!-- <span class="badge badge-primary">1</span> -->
            </h4>
          </template>
          <Row>
            <Col lg="4">
              <SelectOption
                label="Pasien"
                :options="[
                  { value: '1', label: 'Pasien 1' },
                  { value: '2', label: 'Pasien 2' },
                  { value: '3', label: 'Pasien 3' },
                ]"
                placeholder="Pasien"
              />
            </Col>
            <Col lg="4">
              <SelectOption
                label="Dokter"
                :options="[
                  { value: '1', label: 'Dokter 1' },
                  { value: '2', label: 'Dokter 2' },
                  { value: '3', label: 'Dokter 3' },
                ]"
                placeholder="Dokter"
              />
            </Col>
            <!-- tipe resep -->
            <Col lg="4">
              <SelectOption
                label="Jenis Harga"
                :options="[
                  { value: '1', label: 'Resep' },
                  { value: '2', label: 'Non Resep' },
                ]"
                placeholder="Tipe Resep"
              />
            </Col>
            <!-- tanggal dan tempo  inputfield type date-->
          </Row>
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
              <div class="box">
                <div class="box-header">
                  <h4 class="box-title">Total</h4>
                </div>
                <div class="box-body">
                  <div class="box-total">{{ totalPrice }}</div>
                </div>
              </div>
              <div class="box">
                <div class="box-header bg-light">
                  <h4 class="box-title">Kembalian</h4>
                </div>
                <div class="box-body">
                  <div class="box-total">Rp. 0</div>
                </div>
              </div>
            </Col>
          </Row>

          <Row>
            <Col lg="12">
              <div>
                <h6>
                  <strong>Keranjang</strong>
                </h6>
              </div>
              <ReusableTable
                tableId="payment-counter-table"
                :columns="columns"
                :rows="selected"
                :selectable="true"
                :has-number="true"
              />
            </Col>
          </Row>
          <template #footer>
            <!-- tombol buat transaiksi -->
            <Row> </Row>
            <Row>
              <Col lg="6">
                <Button
                  label="Buat Transaksi"
                  type="primary"
                  block
                  icon="fas fa-plus-circle"
                  :disabled="selected.length === 0"
                />
              </Col>
              <Col lg="6">
                <Button
                  label="Batal"
                  type="danger"
                  block
                  icon="fas fa-times-circle"
                />
              </Col>
            </Row>
          </template>
        </Card>
      </Col>
    </Row>
  </ReusableSection>
</template>

<script setup>
import {
  Button,
  Card,
  Col,
  InputField,
  InputSearch,
  ReusableSection,
  ReusableTable,
  Row,
  SelectOption,
} from "@/components";
import { useProductStore } from "@/store/modules/product-store";
import { ref, watch } from "vue";
const productStore = useProductStore();
const selected = ref([]);
const totalPrice = ref(0);
const currentPage = ref(productStore.pagination.currentPage);
const columnsProduct = ref([]);

const columns = ref([
  {
    key: "code",
    label: "Kode",
  },
  {
    key: "name",
    label: "Nama Obat",
    width: 10,
  },
  {
    key: "category",
    label: "Kategori",
  },
  {
    key: "counter",
    label: "Jumlah",
    type: "counter",
    width: 5,
  },
  {
    key: "unit",
    label: "Satuan",
    width: 5,
  },
  {
    key: "price",
    label: "Harga",
  },
  {
    key: "total",
    label: "Total",
  },
  {
    key: "discount",
    label: "Diskon",
  },
  {
    key: "description",
    label: "Keterangan",
  },
  {
    key: "action",
    label: "Aksi",
    type: "actions",
    actions: ["Delete"],
  },
]);
const calculateTotalPrice = () => {
  totalPrice.value = selected.value.reduce(
    (total, product) => total + product.price,
    0
  );
};

watch(selected, () => {
  calculateTotalPrice();
});

watch(
  () => selected.value,
  (newValue, oldValue) => {
    calculateTotalPrice();
  }
);
const handleSelect = (event) => {
  // Update the selected rows in the parent component's state
  console.log(event);
  selected.value = event;

  // Perform other actions, if needed
  console.log(selected);
};
</script>

<style>
/* Your styles here */

.slide-enter-active,
.slide-leave-active {
  transition: transform 0.5s;
}

.slide-enter, .slide-leave-to /* .slide-leave-active in <2.1.8 */ {
  transform: translateX(100%);
}

.box {
  border: 1px solid #ddd;
  border-radius: 3px;
  margin-bottom: 20px;
  box-shadow: 0 1px 1px rgba(0, 0, 0, 0.05);
}
.box .box-header {
  background: #2fffb3;
  padding: 10px;
  border-bottom: 1px solid #ddd;
  border-radius: 3px 3px 0 0;
}
.box .box-header h4 {
  margin: 0;
  font-size: 1em;
}
.box .box-body {
  padding: 10px;
}
.box .box-body .box-total {
  font-size: 2em;
  margin: 0;
  font-weight: 600;
  text-align: right;
}
</style>
