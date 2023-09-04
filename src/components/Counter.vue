<template>
  <div class="counter">
    <Button
      class="btn-sm"
      @click="decrement"
      type="danger"
      outline
      icon="fas fa-minus"
    />
    <input class="counter-input" v-model="quantity" @input="updateQuantity" />
    <Button
      class="btn-sm"
      @click="increment"
      type="primary"
      outline
      icon="fas fa-plus"
    />
  </div>
</template>

<script setup>
import { Button } from "@/components";
import { defineEmits, defineProps, ref } from "vue";
const { value } = defineProps(["value"]);
const { emit } = defineEmits();
const quantity = ref(value || 1);
const decrement = () => {
  if (quantity.value > 0) {
    quantity.value--;
    emit("update:value", quantity.value);
  }
};

const increment = () => {
  quantity.value++;
  emit("update:value", quantity.value);
};
</script>

<style scoped>
.counter {
  display: flex;
  align-items: center;
}

.counter-btn {
  background-color: #007bff;
  color: #fff;
  border: none;
  cursor: pointer;
  font-size: 16px;
  padding: 8px 12px;
}

.counter-input {
  text-align: center;
  font-size: 12px;
  width: 30px;
  margin: 0 8px;
}
</style>
