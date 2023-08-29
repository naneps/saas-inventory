<template>
  <nav class="d-inline-block">
    <ul class="pagination mb-0">
      <li class="page-item" :class="{ disabled: currentPage === 1 }">
        <a
          class="page-link"
          href="#"
          @click.prevent="goToPage(currentPage - 1)"
        >
          <i class="fas fa-chevron-left"></i>
        </a>
      </li>
      <li
        class="page-item"
        v-for="page in totalPageCount"
        :key="page"
        :class="{ active: currentPage === page }"
      >
        <a class="page-link" href="#" @click.prevent="goToPage(page)">{{
          page
        }}</a>
      </li>
      <li
        class="page-item"
        :class="{ disabled: currentPage === totalPageCount }"
      >
        <a
          class="page-link"
          href="#"
          @click.prevent="goToPage(currentPage + 1)"
        >
          <i class="fas fa-chevron-right"></i>
        </a>
      </li>
    </ul>
  </nav>
</template>

<script setup>
import { defineProps } from "vue";

const props = defineProps({
  currentPage: Number,
  totalPageCount: Number,
});

const goToPage = (page, context) => {
  if (page >= 1 && page <= props.totalPageCount) {
    // context.emit("page-change", page);
  }
};
</script>

<style scoped>
/* Your pagination styles here */
</style>
