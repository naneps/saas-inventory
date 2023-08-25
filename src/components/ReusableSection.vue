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
      <slot name="body">
        <!-- Use slot to allow custom body content -->
        <h2 class="section-title">{{ subTitle }}</h2>
        <p class="section-lead">{{ leadText }}</p>
      </slot>
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

<style>
/* Your styles here */
</style>
