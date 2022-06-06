<template>
  <div class="row">
    <div class="col-md-3">
      <Filter title="Şehir Seçim.">
        <Select v-model="filter.city" :data="cities" />
      </Filter>

      <Filter title="Arama Yapın.">
        <input
          v-model="filter.search"
          type="text"
          class="form-control search-input"
          placeholder="Lütfen Arama Yapın.."
        />
      </Filter>

      <div class="btn-group filter-buttons">
        <Button :disabled="jobs_data_loading" data-test-id="search-btn" @click="handleSearch()">Ara</Button>
        <Button :disabled="jobs_data_loading" data-test-id="clear-btn" @click="handleClear()">Temizle</Button>
      </div>
    </div>
    <div class="col-md-9">
      <div v-if="jobs_data_loading">Yükleniyor...</div>
      <div v-if="!jobs_data_loading">
        <div class="filter-detail">
          <h1>Toplam {{ jobs_data?.totalCount }} adet ilan bulundu..</h1>

          <p v-if="route.query.search || route.query.city">
            <span v-if="route.query.city">"{{ cityName }}" şehrindeki </span>
            <span v-if="route.query.search"> "{{ route.query.search }}" </span>
            arama sonucu
          </p>
        </div>

        <NoResult v-if="!jobs_data?.jobs?.length && !jobs_data_loading" />

        <Job
          v-for="item in jobs_data.jobs"
          :key="item.id"
          :title="item.title"
          :description="item.description"
          @click="handleDetail(item.id)"
        />
        <Pagination v-if="jobs_data?.totalPage > 1">
          <PaginationItem @click="handlePage('prev')">Önceki</PaginationItem>
          <PaginationItem v-for="i in jobs_data.totalPage" :key="i" :active="i === filter.page" @click="handlePage(i)">
            {{ i }}
          </PaginationItem>
          <PaginationItem @click="handlePage('next')">Sonraki</PaginationItem>
        </Pagination>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'ListComp',
};
</script>
<script setup>
import { ref, computed, onMounted } from 'vue';
import { Button, Select, Pagination, PaginationItem, NoResult } from '../components/ui';
import { Job, Filter } from '../components';
import { ROUTE, ACTIONS } from '../constant';
import { useRouter, useRoute } from 'vue-router';
import { useStore } from 'vuex';

const router = useRouter();
const route = useRoute();
const store = useStore();

let filter = ref({
  search: route.query.search,
  city: route.query.city,
  page: parseInt(route.query.page) || 1,
});

// computed
const jobs_data = computed(() => store.state.jobs_data);
const jobs_data_loading = computed(() => store.state.jobs_data_loading);
const cityName = computed(() => store.getters.cityName(route.query.city));
const cities = computed(() => store.state.cities);

// events
const handleDetail = (id) => {
  router.push(ROUTE.PAGE_JOBS_DETAIL.replace(':id', id));
};
const handleClear = () => {
  router.replace({ query: null }).then((resp) => {
    filter.value = {
      page: 1,
    };
    getJobs();
  });
};
const handleSearch = () => {
  const isSearchChange = route.query.search !== filter.value.search;
  const isCityChange = route.query.city !== filter.value.city;

  if (isSearchChange || isCityChange) {
    filter.value.page = 1;
  }

  router.replace({ query: filter.value }).then((resp) => getJobs());
};
const handlePage = (page) => {
  const oldPage = filter.value.page;
  const isLastPage = filter.value.page >= jobs_data.value.totalPage;
  const isFirstPage = filter.value.page <= 1;

  if (page === 'next' && !isLastPage) {
    filter.value.page++;
  } else if (page === 'prev' && !isFirstPage) {
    filter.value.page--;
  } else if (typeof page === 'number') {
    filter.value.page = page;
  }
  // aynı sayfaya tıklarsa fazla request atmasın kontrolü
  if (filter.value.page !== oldPage) handleSearch();
};

const getJobs = () => {
  store.dispatch(ACTIONS.FETCH_JOBS, {
    ...filter.value,
  });
};

onMounted(() => {
  if (!store.state.cities || store.state.cities.length < 1) {
    router.push('/');
    return;
  }
  getJobs();
});
</script>

<style lang="scss">
.filter-buttons {
  width: 100%;
  button {
    width: 50%;
  }
}
.filter-detail {
  p {
    color: $light-color;
  }
}
</style>
