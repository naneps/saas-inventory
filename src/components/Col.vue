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
.col,
.col-xs-12,
.col-sm-12,
.col-md-12,
.col-lg-12,
.col-xs-11,
.col-sm-11,
.col-md-11,
.col-lg-11,
.col-xs-10,
.col-sm-10,
.col-md-10,
.col-lg-10,
.col-xs-9,
.col-sm-9,
.col-md-9,
.col-lg-9,
.col-xs-8,
.col-sm-8,
.col-md-8,
.col-lg-8,
.col-xs-7,
.col-sm-7,
.col-md-7,
.col-lg-7,
.col-xs-6,
.col-sm-6,
.col-md-6,
.col-lg-6,
.col-xs-5,
.col-sm-5,
.col-md-5,
.col-lg-5,
.col-xs-4,
.col-sm-4,
.col-md-4,
.col-lg-4,
.col-xs-3,
.col-sm-3,
.col-md-3,
.col-lg-3,
.col-xs-2,
.col-sm-2,
.col-md-2,
.col-lg-2,
.col-xs-1,
.col-sm-1,
.col-md-1,
.col-lg-1,
.col-sm,
.col-md,
.col-lg {
  position: relative;
  min-height: 1px;
  padding-right: 10px !important;
  margin: 0 !important;
  padding-left: 10px !important;
}
</style>
