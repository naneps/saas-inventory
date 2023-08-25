<template>
  <reusable-section
    :title="title"
    :sub-title="subTitle"
    :lead-text="leadText"
    :card-title="cardTitle"
  >
  </reusable-section>
</template>
<script setup>
import ReusableSection from "@/components/ReusableSection.vue";
import { ref } from "vue";
const title = ref("Loket Pembayaran");
const subTitle = ref("Loket Pembayaran");
const leadText = ref("Loket Pembayaran");
const cardTitle = ref("Loket Pembayaran");
</script>
<style>
</style>