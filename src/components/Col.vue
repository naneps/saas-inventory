<template>
  <div :class="colClasses">
    <slot></slot>
  </div>
</template>

<script setup>
import { computed, defineProps } from "vue";

const props = defineProps({
  xs: { type: [String, Number], default: 12 }, // Lebar pada layar kecil (contoh: "12", "auto")
  sm: { type: [String, Number], default: 12 }, // Lebar pada layar kecil (contoh: "6", "auto")
  md: { type: [String, Number], default: 12 }, // Lebar pada layar sedang
  lg: { type: [String, Number], default: 12 }, // Lebar pada layar besar
});
const colClasses = computed(() => {
  return {
    col: true,
    [`col-xs-${props.xs}`]: props.xs,
    [`col-sm-${props.sm}`]: props.sm,
    [`col-md-${props.md}`]: props.md,
    [`col-lg-${props.lg}`]: props.lg,
  };
});
</script>

<style scoped>
</style>
