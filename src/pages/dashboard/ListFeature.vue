<template>
  <reusable-section :title="title" :subTitle="subTitle" :cardTitle="cardTitle">
    <div class="row">
      <div
        v-for="feature in features"
        :key="feature.name"
        class="col-md-2 col-sm-3 col-6 mb-2"
      >
        <Feature :key="feature.name" :feature="feature" />
      </div>
    </div>
  </reusable-section>
</template>
<script setup>
import Feature from "@/components/Feature.vue";
import ReusableSection from "@/components/ReusableSection.vue";
import { useRouteStore } from "@/store/modules/route-store";
const features = useRouteStore().features;
const title = "Dashboard";
const subTitle = "Dashboard";
const cardTitle = "Dashboard";
</script>
<style>
</style>