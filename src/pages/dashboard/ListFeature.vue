<template>
  <section class="section">
    <div class="section-header">
      <h1>Menu Utama Pelayanan</h1>
      <!-- <div class="section-header-breadcrumb">
        <div class="breadcrumb-item active"><a href="#">Dashboard</a></div>
        <div class="breadcrumb-item"><a href="#">Layout</a></div>
        <div class="breadcrumb-item">Top Navigation</div>
      </div> -->
    </div>
    <div class="section-body">
      <h2 class="section-title">Daftar Menu Aplikasi</h2>
      <p class="section-lead"></p>
      <div class="card">
        <div class="card-header">
          <h4><i class="fas fa-columns"></i> Menu Utama</h4>
        </div>
        <div class="card-body">
          <div class="row">
            <div
              v-for="feature in features"
              :key="feature.name"
              class="col-md-2 col-sm-3 col-6 mb-2"
            >
              <Feature :key="feature.name" :feature="feature" />
            </div>
          </div>
        </div>
        <div class="card-footer bg-whitesmoke"></div>
      </div>
    </div>
  </section>
</template>
<script setup>
import Feature from "@/components/Feature.vue";
import { useRouteStore } from "@/store/modules/route-store";
const features = useRouteStore().features;
</script>
<style>
</style>