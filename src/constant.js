const ROUTE = {
  PAGE_JOBS: '/jobs',
  PAGE_JOBS_DETAIL: '/jobs/:id',
};

const ACTIONS = {
  FETCH_JOB: 'fetchJob',
  FETCH_JOBS: 'fetchJobs',
  FETCH_CITIES: 'fetchCities',
};

const MUTATIONS = {
  SET_JOB: 'setJob',
  SET_JOB_LOADING: 'setJobLoading',
  SET_JOBS: 'setJobs',
  SET_JOBS_LOADING: 'setJobsLoading',
  SET_CITIES: 'setCities',
};

const CITIES = [
  { text: 'İstanbul', value: 34 },
  { text: 'Ankara', value: 6 },
  { text: 'İzmir', value: 35 },
];
export { ROUTE, ACTIONS, MUTATIONS, CITIES };
