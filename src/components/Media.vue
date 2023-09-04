<template >
  <li class="media">
    <slot name="leading"></slot>
    <div class="media-body">
      <div class="float-right">
        <div class="font-weight-600 text-muted text-small">
          {{ sideTitle }}
        </div>
      </div>
      <div class="media-title">{{ title }}</div>
      <div class="mt-1">
        <slot name="content"></slot>
      </div>
    </div>
  </li>
</template>
<script setup  >
import { defineProps } from "vue";
const props = defineProps({
  title: { type: String, default: "Title" },
  sideTitle: { type: String, default: "Side Title" },
});
</script>
<style >
</style>