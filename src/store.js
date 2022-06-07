import { createStore } from 'vuex';
import { ACTIONS, MUTATIONS } from './constant';
import axios from 'axios';
import { wait } from './helper';
const BASE_API_URL = process.env.VUE_APP_BASE_API_URL;

const store = createStore({
  state() {
    return {
      jobs_data: {},
      jobs_data_loading: true,
      cities: [],
      job: {},
      job_loading: true,
    };
  },
  mutations: {
    [MUTATIONS.SET_JOBS]: (state, data) => (state.jobs_data = data),
    [MUTATIONS.SET_JOBS_LOADING]: (state, data) => (state.jobs_data_loading = data),
    [MUTATIONS.SET_JOB]: (state, data) => (state.job = data),
    [MUTATIONS.SET_JOB_LOADING]: (state, data) => (state.job_loading = data),
    [MUTATIONS.SET_CITIES]: (state, data) => (state.cities = data),
  },
  actions: {
    async [ACTIONS.FETCH_JOBS]({ commit }, request) {
      commit(MUTATIONS.SET_JOBS_LOADING, true);
      await wait(500);
      const { data } = await axios.get(`${BASE_API_URL}/jobs`, {
        params: request,
      });
      commit(MUTATIONS.SET_JOBS, data.data);
      commit(MUTATIONS.SET_JOBS_LOADING, false);
    },
    async [ACTIONS.FETCH_CITIES]({ commit }) {
      const { data } = await axios.get(`${BASE_API_URL}/cities`);
      commit(MUTATIONS.SET_CITIES, data.data);
    },
    async [ACTIONS.FETCH_JOB]({ commit }, { id }) {
      commit(MUTATIONS.SET_JOB_LOADING, true);
      await wait(500);

      const { data } = await axios.get(`${BASE_API_URL}/jobs/detail`, {
        params: { id },
      });
      commit(MUTATIONS.SET_JOB, data.data);
      commit(MUTATIONS.SET_JOB_LOADING, false);
    },
  },
  getters: {
    cityName: (state) => (id) => {
      return state.cities.find((city) => city.value == id).text;
    },
  },
});

export default store;
