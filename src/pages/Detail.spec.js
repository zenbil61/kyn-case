import { mount } from '@vue/test-utils';
import Detail from './Detail.vue';
import router from '@/router';
import store from '@/store';
import { wait } from '@/helper';
import { CITIES } from '@/constant';

it('renders correctly', async () => {
  store.state.cities = CITIES;
  router.currentRoute.value.params.id = 0;

  const wrapper = mount(Detail, {
    global: {
      plugins: [router, store],
    },
    props: {},
  });
  wait(1500);

  expect(wrapper.element).toMatchSnapshot();
});
