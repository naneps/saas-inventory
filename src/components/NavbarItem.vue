<template>
  <li :class="{ 'nav-item': true, dropdown: hasChildren }">
    <router-link v-if="!hasChildren" :to="link" class="nav-link">
      <i :class="iconClass"></i><span>{{ label }}</span>
    </router-link>
    <a v-else href="#" data-toggle="dropdown" class="nav-link has-dropdown">
      <i :class="iconClass"></i><span>{{ label }}</span>
    </a>
    <ul v-if="hasChildren" class="dropdown-menu">
      <NavItem
        v-for="(childItem, index) in children"
        :key="index"
        :item="childItem"
      />
    </ul>
  </li>
</template>

<script setup>
import { computed, defineProps } from "vue";

const props = defineProps({
  label: String,
  link: String,
  icon: String,
  children: Array,
});

const iconClass = computed(() => (props.icon ? `fas ${props.icon}` : ""));
const hasChildren = computed(() => props.children && props.children.length > 0);
</script>
<style>
.nav-item {
  width: max-content; /* Adjust this based on your design */
  white-space: nowrap;
}
</style>