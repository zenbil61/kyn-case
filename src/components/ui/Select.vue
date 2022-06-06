<template>
  <select :value="props.modelValue" class="form-select" @input="$emit('update:modelValue', $event.target.value)">
    <option value="" disabled selected>Seçim Yapın</option>
    <option v-for="item in props.data" :key="item.value" :value="item.value">
      {{ item.text }}
    </option>
  </select>
</template>

<script>
export default {
  name: 'SelectComp',
};
</script>

<script setup>
import { defineProps } from 'vue';
const props = defineProps(['data', 'value', 'modelValue']);
</script>
