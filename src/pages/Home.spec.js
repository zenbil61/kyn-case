import { mount } from '@vue/test-utils';
import Home from './Home.vue';
import { Button } from '@/components/ui';
import router from '@/router';
import store from '@/store';
import { wait } from '@/helper';

it('renders correctly', async () => {
  const wrapper = mount(Home, {
    global: {
      plugins: [router, store],
    },
  });
  await wait(2000);
  expect(wrapper.element).toMatchSnapshot();
  wrapper.findComponent(Button).trigger('click');
});
