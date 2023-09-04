<template>
  <div class="input-group mb-3">
    <input
      v-model="searchQuery"
      :placeholder="placeholder"
      @input="handleInput"
      type="text"
      class="form-control"
    />
    <div class="input-group-append">
      <button
        class="btn btn-primary btn-icon"
        type="button"
        @click="handleSearch"
      >
        <i class="fas fa-search"></i>
      </button>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    placeholder: String, // Placeholder text for the input
  },
  data() {
    return {
      searchQuery: "", // Data property to store the search query
    };
  },
  methods: {
    handleInput() {
      // Emit an "input" event to pass the search query to the parent component
      this.$emit("input", this.searchQuery);
    },
    handleSearch() {
      // Emit a custom "search" event when the search button is clicked
      this.$emit("search", this.searchQuery);
    },
  },
};
</script>
