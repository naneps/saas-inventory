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
      <div class="card">
        <div class="card-header">
          <h4><i class="fas fa-columns"></i> {{ cardTitle }}</h4>
        </div>
        <div class="card-body">
          <slot></slot>
          <!-- Default slot for card body content -->
        </div>
        <div class="card-footer bg-whitesmoke">
          <slot name="footer"></slot>
          <!-- Use slot to allow custom footer content -->
        </div>
      </div>
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
.section {
  padding: 0px 0 !important;
  background-color: aqua !important;
  margin: 0px !important;
}
</style>
