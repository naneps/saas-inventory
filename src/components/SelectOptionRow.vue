<template>
  <div class="form-group row">
    <label v-if="hasLabel" class="control-label col-sm-3 col-form-label">{{
      label
    }}</label>
    <div class="col-sm-9">
      <select
        class="form-control"
        :name="name"
        :tabindex="tabindex"
        v-model="selectedOption"
        @change="onChange"
      >
        <option
          v-for="(option, index) in options"
          :key="index"
          :value="option.value"
        >
          {{ option.label }}
        </option>
      </select>
    </div>
  </div>
</template>

<script>
import { ref, watch } from "vue";

export default {
  props: {
    label: String,
    name: String,
    tabindex: Number,
    hasLabel: {
      type: Boolean,
      default: true,
    },
    options: Array,
    value: [String, Number],
  },
  setup(props, { emit }) {
    const selectedOption = ref(props.value);

    // Watch for changes in the v-model value
    watch(
      () => props.value,
      (newValue) => {
        selectedOption.value = newValue;
      }
    );

    const onChange = () => {
      emit("update:value", selectedOption.value); // Emit the updated value to v-model
    };

    return {
      selectedOption,
      onChange,
    };
  },
};
</script>

<style scoped>
/* Add your component-specific styles here */
</style>
