<template>
  <section class="section">
    <div class="section-header">
      <slot name="header">
        <!-- Use slot to allow custom header content -->
        <h1>{{ title }}</h1>
      </slot>
      <BreadCrumb></BreadCrumb>
    </div>
    <div class="section-body">
      <slot></slot>
      <!-- Default slot for card body content -->
    </div>
  </section>
</template>

<script setup>
import BreadCrumb from "@/components/BreadCrumb.vue";
const { props } = defineProps({
  title: String,
  subTitle: String,
  leadText: String,
  cardTitle: String,
});
</script>

<style scoped>
/* Your styles here */
</style>
