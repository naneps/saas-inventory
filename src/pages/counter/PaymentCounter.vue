<template>
  <div>
    <ReusableSection
      :title="'Loket Pembayaran'"
      :subTitle="'Loket Pembayaran'"
      :leadText="'Loket Pembayaran'"
      :cardTitle="'Loket Pembayaran'"
    >
      <div class="custom-content">
        <!-- Custom content for card body -->
      </div>
      <template #footer>
        <!-- Custom footer content -->
      </template>
    </ReusableSection>
  </div>
</template>

<script>
import ReusableSection from "@/components/ReusableSection.vue";
export default {
  components: {
    ReusableSection,
  },
};
</script>

<style>
/* Your styles here */
</style>
