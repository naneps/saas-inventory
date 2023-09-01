<template>
  <button
    :class="[
      'btn',
      block ? 'btn-block' : '',
      buttonTypeClass,
      buttonSizeClass,
      { 'btn-icon': isIconOnly },
    ]"
  >
    <i v-if="icon" :class="iconClass"></i>
    {{ label }}
  </button>
</template>

<script setup>
import { computed, defineProps } from "vue";

const props = defineProps({
  label: String,
  link: String,
  block: { type: Boolean, default: false },
  type: { type: String, default: "default" },
  size: { type: String, default: "" },
  icon: String,
  iconLeft: { type: Boolean, default: true },
  outline: { type: Boolean, default: false },
});

const buttonTypeClass = computed(() => {
  return props.outline ? `btn-outline-${props.type}` : `btn-${props.type}`;
});

const buttonSizeClass = computed(() => {
  return props.size === "lg" ? "btn-lg" : props.size === "sm" ? "btn-sm" : "";
});

const isIconOnly = computed(() => props.icon && !props.label);

const iconClass = computed(() => {
  return props.icon && props.iconLeft ? props.icon : "";
});
</script>

<style scoped>
/* Add any component-specific styles here */
</style>
