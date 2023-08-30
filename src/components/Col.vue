<template>
  <div :class="colClasses">
    <slot></slot>
  </div>
</template>

<script setup>
import { computed, defineProps } from "vue";

const props = defineProps({
  xs: [String, Number], // Lebar pada layar kecil (contoh: "12", "auto")
  sm: [String, Number], // Lebar pada layar kecil (contoh: "6", "auto")
  md: [String, Number], // Lebar pada layar sedang
  lg: [String, Number], // Lebar pada layar besar
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
.col {
  padding: 15px; /* Sesuaikan dengan kebutuhan Anda */
  box-sizing: border-box;
  flex-grow: 1;
}
</style>
