<template>
  <div class="card">
    <div v-if="hasHeader" class="card-header">
      <slot name="header"></slot>
    </div>
    <div class="card-body">
      <slot></slot>
    </div>
    <div v-if="hasFooter" class="card-footer">
      <slot name="footer"></slot>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    hasHeader: {
      type: Boolean,
      default: true,
    },
    hasFooter: {
      type: Boolean,
      default: true,
    },
  },
};
</script>

<style scoped>
</style>
