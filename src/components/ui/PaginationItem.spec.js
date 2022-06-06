import { mount } from '@vue/test-utils';
import PaginationItem from './PaginationItem.vue';

describe('PaginationItem.vue', () => {
  it('PaginationItem active test', () => {
    const wrapper = mount(PaginationItem, {
      slots: {
        default: 'slot content',
      },
      props: {
        active: true,
      },
    });

    expect(wrapper.html()).toContain('slot content');
    expect(wrapper.find('.page-link').exists()).toBe(true);
    expect(wrapper.find('.page-item').classes('active')).toBe(true);
  });

  it('PaginationItem not active test', () => {
    const wrapper = mount(PaginationItem, {
      slots: {
        default: 'slot content',
      },
      props: {
        active: false,
      },
    });

    expect(wrapper.html()).toContain('slot content');
    expect(wrapper.find('.page-link').exists()).toBe(true);
    expect(wrapper.find('.page-item').classes('active')).toBe(false);
  });
});
