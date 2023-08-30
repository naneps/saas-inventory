<template>
  <div class="table-responsive">
    <table class="table table-striped border">
      <thead>
        <tr>
          <th v-if="selectable">
            <div class="custom-checkbox custom-control">
              <input
                type="checkbox"
                :id="selectAllId"
                class="custom-control-input"
                v-model="selectAll"
                @change="toggleSelectAll"
              />
              <label :for="selectAllId" class="custom-control-label"
                >&nbsp;</label
              >
            </div>
          </th>
          <th width="5%" v-if="hasNumber">
            <center>No.</center>
          </th>

          <th v-for="column in columns" :key="column.key">
            <span v-if="column.align === 'center'" class="text-center">
              <center>
                {{ column.label }}
              </center>
            </span>
            <span v-else-if="column.align === 'right'" class="text-end">
              {{ column.label }}
            </span>
            <span v-else>{{ column.label }}</span>
          </th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(row, index) in displayedRows" :key="index" class="border">
          <td v-if="selectable" width="5%" align="center">
            <div class="custom-checkbox custom-control">
              <input
                type="checkbox"
                :id="getCheckboxId(index)"
                class="custom-control-input"
                v-model="selectedRows"
                :value="index"
              />
              <label :for="getCheckboxId(index)" class="custom-control-label"
                >&nbsp;</label
              >
            </div>
          </td>
          <td align="center" v-if="hasNumber">{{ startIndex + index + 1 }}</td>
          <td v-for="column in columns" :key="column.key" :align="column.align">
            <template v-if="column.type === 'actions'">
              <div class="btn-group btn-group-md">
                <button
                  class="btn btn-icon icon-left btn-sm"
                  :class="colorBtn(action)"
                  v-for="action in column.actions"
                  :key="action"
                  @click="performAction(action, row)"
                >
                  <i :class="iconBtn(action)"></i>
                  {{ slugBtn(action) }}
                </button>
              </div>
            </template>
            <template v-else-if="column.type === 'image'">
              <img :src="row[column.key]" alt="Image" width="50" height="50" />
            </template>
            <template v-else>
              {{ row[column.key] }}
            </template>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script setup>
import { computed, defineProps, onMounted, ref, watch } from "vue";

const props = defineProps({
  columns: Array,
  rows: Array,
  selectable: { type: Boolean, default: false },
  selected: Array,
  hasNumber: { type: Boolean, default: false },
  currentPage: Number, // Get currentPage from parent
  pageSize: Number,
});

const selectAllId = "select-all";
const selectAll = ref(false);
const selectedRows = ref([]);

const getCheckboxId = (index) => `checkbox-${index}`;

onMounted(() => {
  if (props.selected) {
    selectedRows.value = props.selected;
  }
});

watch(
  () => props.rows,
  (newRows) => {
    selectedRows.value = selectAll.value
      ? newRows.map((_, index) => index)
      : [];
  }
);
watch(
  () => selectedRows.value,
  (newSelectedRows) => {
    selectAll.value = newSelectedRows.length === props.rows.length;
  }
);

const toggleSelectAll = () => {
  if (selectAll.value) {
    selectedRows.value = props.rows.map((_, index) => index);
  } else {
    selectedRows.value = [];
  }
};
const performAction = (action, rowData) => {
  // Lakukan tindakan berdasarkan action yang dipilih
  if (action === "Edit") {
    // Lakukan sesuatu saat tombol Edit ditekan
    //emit
  } else if (action === "Delete") {
    // Lakukan sesuatu saat tombol Delete ditekan
  } else if (action === "View Details") {
    // Lakukan sesuatu saat tombol View Details ditekan
  }
};
const colorBtn = (action) => {
  if (action === "Edit") {
    return "btn-primary";
  } else if (action === "Delete") {
    return "btn-danger";
  } else if (action === "View Details") {
    return "btn-success";
  }
};
const iconBtn = (action) => {
  if (action === "Edit") {
    return "fas fa-edit";
  } else if (action === "Delete") {
    return "fas fa-trash";
  } else if (action === "View Details") {
    return "fas fa-eye";
  }
};
const slugBtn = (action) => {
  if (action === "Edit") {
    return "Edit";
  } else if (action === "Delete") {
    return "Hapus";
  } else if (action === "View Details") {
    return "Detail";
  }
};
const startIndex = computed(() => (props.currentPage - 1) * props.pageSize);

const displayedRows = computed(() => {
  return props.rows.slice(startIndex.value, startIndex.value + props.pageSize);
});
</script>

<style scoped>
/* Your table styles here */
</style>





