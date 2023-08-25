<template>
  <div class="feature-card">
    <div class="card card-primary border h-100">
      <div class="card-body">
        <div class="mb-2 text-center">
          <img
            :src="feature.image"
            class="rounded img-fluid"
            width="100"
            height="100"
            :alt="feature.name"
          />
        </div>
        <center>
          <span class="text-primary text-center item-self-center">
            {{ feature.name }}
          </span>
        </center>
      </div>
      <div class="card-footer bg-whitesmoke">
        <center>
          <router-link :to="feature.path" class="btn btn-primary btn-sm">
            <i class="fas fa-arrow-right"></i> Buka
          </router-link>
        </center>
      </div>
    </div>
  </div>
</template>

<script setup>
import { defineProps } from "vue";

const props = defineProps({
  feature: Object,
});
</script>

<style scoped>
.feature-card {
  height: 100%;
  margin-bottom: 20px;
}
</style>
