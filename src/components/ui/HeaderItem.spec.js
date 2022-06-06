import { mount } from '@vue/test-utils';
import HeaderItem from './HeaderItem.vue';

import router from '@/router';

describe('HeaderItem.vue', () => {
  it('renders HeaderItem when passed', () => {
    const wrapper = mount(HeaderItem, {
      props: {
        text: 'liste',
        href: '/list',
      },
      global: {
        plugins: [router],
      },
    });
    const $el = wrapper.find('.nav-link');
    expect($el.text()).toContain('liste');
    expect($el.attributes().href).toBe('/list');
  });
});
