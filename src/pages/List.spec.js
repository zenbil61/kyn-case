import { mount } from '@vue/test-utils';
import List from './List.vue';
import router from '@/router';
import store from '@/store';
import { wait } from '@/helper';
import { CITIES } from '@/constant';
import { PaginationItem, Pagination } from '@/components/ui';

it('renders correctly', async () => {
  store.state.cities = CITIES;
  const wrapper = mount(List, {
    global: {
      plugins: [router, store],
    },
  });
  await wait(1500);
  expect(wrapper.element).toMatchSnapshot();

  // pagination control
  const pagination = wrapper.findComponent(Pagination);
  expect(pagination.exists()).toBeTruthy();

  // pagination click control
  pagination.findAllComponents(PaginationItem).at(2).trigger('click');
  await wait(1500);
  expect(wrapper.element).toMatchSnapshot();

  // search control
  const textInput = wrapper.find('input[type="text"]');
  await textInput.setValue('front');
  const select = wrapper.find('select');
  await select.setValue(34);
  const searchButton = wrapper.find('[data-test-id=search-btn]');
  await searchButton.trigger('click');
  await wait(1500);
  expect(wrapper.element).toMatchSnapshot();
});
