<template >
  <reusable-section
    :title="title"
    :sub-title="subTitle"
    :lead-text="leadText"
    :card-title="cardTitle"
  ></reusable-section>
</template>
<script setup>
import ReusableSection from "@/components/ReusableSection.vue";
import { ref } from "vue";
const title = ref("Pemeriksaan");
const subTitle = ref("Pemeriksaan");
const leadText = ref("Pemeriksaan");
const cardTitle = ref("Pemeriksaan");
</script>
<style >
</style>