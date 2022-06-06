<template>
  <div class="card job">
    <img class="card-img-top" />
    <div class="card-body">
      <h5 class="card-title">{{ props.title }}</h5>
      <p class="card-text">
        {{ props.description }}
      </p>
      <Button type="primary" @click="emit('click')">Detay</Button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'FilterComp',
};
</script>
<script setup>
import { Button } from '../components/ui';
import { defineEmits, defineProps } from 'vue';

const emit = defineEmits(['click']);
const props = defineProps(['title', 'description']);
</script>

<style lang="scss">
.card.job {
  margin-top: 30px;
  border-radius: $radius;
}
</style>
