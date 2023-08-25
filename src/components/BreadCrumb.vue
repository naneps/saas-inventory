<template>
  <div class="section-header-breadcrumb">
    <!-- Add the first breadcrumb for "Menu Utama" with a home icon -->
    <div
      :class="{
        'breadcrumb-item': true,
        active: isLinkActive('/'), // Check if the link is active
      }"
    >
      <router-link to="/"> <i class="fas fa-home"></i> Menu Utama </router-link>
    </div>

    <!-- Loop through other breadcrumbs -->
    <div
      v-for="(crumb, index) in breadcrumb"
      :key="index"
      :class="{
        'breadcrumb-item': true,
        active: index === breadcrumb.length - 1,
        inactive: index !== breadcrumb.length - 1 && !isLinkActive(crumb.to), // Check if the link is inactive
      }"
    >
      <router-link :to="crumb.to">
        <i v-if="crumb.icon" :class="crumb.icon"></i> {{ crumb.label }}
      </router-link>
    </div>
  </div>
</template>
<script setup>
import { useRoute, useRouter } from "vue-router";

const route = useRoute();
const router = useRouter();

// Create a dynamic breadcrumb array based on route segments
const breadcrumb = route.matched.map((routeSegment) => ({
  label: routeSegment.meta.title || "Unnamed Page", // Use route meta title or fallback
  to: routeSegment.path,
  icon: routeSegment.meta.icon, // Add the icon class from route meta
}));

const isLinkActive = (link) => {
  return (
    router.currentRoute.value.path === link ||
    router.currentRoute.value.name === link
  );
};
</script>
