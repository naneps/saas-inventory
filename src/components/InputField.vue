<template>
  <div class="form-group">
    <div class="d-block">
      <label :for="inputId" class="control-label">{{ label }}</label>
    </div>
    <input
      :id="inputId"
      :type="type"
      class="form-control"
      :name="name"
      :tabindex="tabindex"
      :class="{ 'is-invalid': errors[inputName] }"
      v-model="inputValue"
      @input="onInput"
    />
    <div class="invalid-feedback" v-if="errors[inputName]">
      {{ validationMessage }}
    </div>
  </div>
</template>

<script>
import { useField } from "vee-validate";

export default {
  props: {
    label: String,
    inputId: String,
    name: String,
    tabindex: Number,
    type: {
      type: String,
      default: "text", // Default to text input type
    },
    isRequired: Boolean,
    validationMessage: String,
    validator: Function, // Dynamic validation function
  },
  setup(props) {
    const {
      value: inputValue,
      errorMessage: validationError,
      meta,
    } = useField(
      props.inputId,
      props.validator // Pass the validator function here
    );

    const inputName = props.inputId;

    const onInput = (event) => {
      inputValue.value = event.target.value;
      validate();
    };

    const { validate } = useField(inputName);

    return {
      inputValue,
      inputName,
      errors: meta,
      onInput,
    };
  },
};
</script>

<style scoped>
/* Add your component-specific styles here */
</style>
