<template>
  <div class="landing">
    <div class="landing-detail">
      <h1>Aradığın işe anında kavuş</h1>
      <p>Öne çıkan ilanları görmek için hemen şehrine göre ara ve ilanları gör</p>
    </div>
    <div class="row">
      <div class="col-md-4">
        <Select v-model="selectedCity" :data="store.state.cities" />
      </div>
      <div class="col">
        <input v-model="searchText" type="text" class="form-control search-input" placeholder="Lütfen Arama Yapın.." />
      </div>
      <div class="col-md-2">
        <Button @click="handleSearch">Ara</Button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HomeComp',
};
</script>
<script setup>
import { ref, onMounted } from 'vue';
import { useRouter } from 'vue-router';
import { ROUTE, ACTIONS } from '../constant';
import { Button, Select } from '../components/ui';
import { useStore } from 'vuex';

const router = useRouter();
const store = useStore();
const searchText = ref(null);
const selectedCity = ref(null);

const handleSearch = () => {
  const query = {};

  if (searchText.value) query.search = searchText.value;
  if (selectedCity.value) query.city = selectedCity.value;

  router.push({
    path: ROUTE.PAGE_JOBS,
    query,
  });
};

onMounted(() => {
  store.dispatch(ACTIONS.FETCH_CITIES);
});
</script>

<style lang="scss">
.landing {
  background: $gray;
  padding: 50px;
  &-detail {
    p {
      margin: 50px 0px;
    }
  }
}
</style>
