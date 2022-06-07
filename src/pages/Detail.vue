<template>
  <div v-if="job_loading">Yükleniyor...</div>
  <div v-if="!job_loading">
    <Button @click="handleBack">Geri</Button>
    <br />
    <br />
    <h2>{{ job.title }}</h2>
    <br />
    <p>{{ job.area }} / {{ cityName }}</p>
    <p>{{ job.description }}</p>
  </div>
</template>

<script>
export default {
  name: 'DetailComp',
};
</script>
<script setup>
import { computed, onMounted } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import { Button } from '../components/ui';
import { useStore } from 'vuex';
import { ACTIONS } from '../constant';
const store = useStore();
const { params } = useRoute();
const router = useRouter();

// computed
const job = computed(() => store.state.job);
const job_loading = computed(() => store.state.job_loading);
const cityName = computed(() => store.getters.cityName(job?.value?.city || ''));

// events
const handleBack = () => {
  store.dispatch('clearJob');
  router.go(-1);
};

onMounted(() => {
  const hasCities = !store.state.cities || store.state.cities.length < 1;
  if (hasCities) {
    router.push('/');
    return;
  }

  store.dispatch(ACTIONS.FETCH_JOB, { id: params.id });
});
</script>
