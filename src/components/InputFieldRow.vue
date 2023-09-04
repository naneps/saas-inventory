<template>
  <div class="form-group row">
    <label :for="inputId" class="control-label col-sm-3 col-form-label">{{
      label
    }}</label>
    <div class="input-group col-sm-9">
      <div v-if="hasIcon" class="input-group-prepend">
        <div class="input-group-text">
          <i :class="iconClass" class="text-primary"></i>
        </div>
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
    </div>
    <div class="invalid-feedback" v-if="errors[inputName]">
      {{ validationMessage }}
    </div>
  </div>
</template>

<script>
import { useField } from "vee-validate";
import { ref, watch } from "vue";
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
    icon: String, // Icon class for the input
    value: [String, Number], // v-model value
    hasIcon: {
      type: Boolean,
      default: false, // Default to false
    },
  },
  setup(props, { emit }) {
    const {
      value: inputValue,
      errorMessage: validationError,
      meta,
    } = useField(
      props.inputId,
      props.validator // Pass the validator function here
    );
    // Create a ref to track the input value
    const inputValueRef = ref(inputValue.value);

    // Watch for changes to the value prop and update inputValueRef
    watch(
      () => props.value,
      (newValue) => {
        inputValueRef.value = newValue;
      }
    );

    const inputName = props.inputId;

    const onInput = (event) => {
      inputValue.value = event.target.value;

      validate();
      emit("update:value", event.target.value); // Emit the updated value to v-model
    };

    const { validate } = useField(inputName);

    return {
      inputValue: inputValueRef,
      inputName,
      errors: meta,
      onInput,
      hasIcon: props.hasIcon,
      iconClass: props.icon,
    };
  },
};
</script>

<style scoped>
/* Add your component-specific styles here */
</style>
