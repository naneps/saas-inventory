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
              <center>{{ column.label }}</center>
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
                :value="row"
              />
              <label :for="getCheckboxId(index)" class="custom-control-label"
                >&nbsp;</label
              >
            </div>
          </td>
          <td align="center" v-if="hasNumber">{{ startIndex + index + 1 }}</td>
          <td
            v-for="column in columns"
            :key="column.key"
            :align="column.align"
            :width="column.width + '%'"
          >
            <template v-if="column.type === 'counter'">
              <Counter
                :value="row[column.key]"
                @update:value="
                  (value) => updateCounterValue(value, row, column.key)
                "
              />
            </template>
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
import { Counter } from "@/components";
import { computed, defineEmits, defineProps, ref, watch } from "vue";

const props = defineProps({
  tableId: String, // Add the tableId prop
  columns: Array,
  rows: Array,
  selectable: { type: Boolean, default: false },
  hasNumber: { type: Boolean, default: false },
});

const emit = defineEmits();

const selectAllId = `select-all-${props.tableId}`; // Use the tableId to create a unique selectAllId
const selectAll = ref(false);
const selectedRows = ref([]);

const getCheckboxId = (index) => `checkbox-${props.tableId}-${index}`; // Use the tableId for checkboxes

const toggleSelectAll = () => {
  if (!selectAll.value) {
    selectedRows.value = [];
  } else {
    selectedRows.value = props.rows.map((row) => ({ ...row }));
  }
};
const updateCounterValue = (value, row, key) => {
  row[key] = value;
  console.log(row);
};

const performAction = (action, rowData) => {
  // Do something based on the selected action
  // You can emit an event or call a callback function here
};

watch(
  () => selectedRows.value,
  (value) => {
    if (value.length === props.rows.length) {
      selectAll.value = true;
    } else {
      selectAll.value = false;
    }
    emit("onSelect", value);
  }
);
const colorBtn = (action) => {
  // Return the button color class based on the action
  if (action === "Edit") {
    return "btn-primary";
  } else if (action === "Delete") {
    return "btn-danger";
  } else if (action === "Detail") {
    return "btn-success";
  }
};

const iconBtn = (action) => {
  // Return the button icon class based on the action
  if (action === "Edit") {
    return "fas fa-edit";
  } else if (action === "Delete") {
    return "fas fa-trash";
  } else if (action === "Detail") {
    return "fas fa-eye";
  }
};

const slugBtn = (action) => {
  // Return the button label based on the action
  if (action === "Edit") {
    return "Edit";
  } else if (action === "Delete") {
    return "Hapus";
  } else if (action === "Detail") {
    return "Detail";
  }
};

const startIndex = computed(() => 0);

const displayedRows = computed(() => {
  return props.rows;
});
</script>

<style scoped>
/* Your table styles here */
</style>