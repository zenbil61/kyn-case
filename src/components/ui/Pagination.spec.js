import { mount } from '@vue/test-utils';
import Pagination from './Pagination.vue';

describe('Pagination.vue', () => {
  it('Pagination test', () => {
    const wrapper = mount(Pagination, {
      slots: {
        default: 'slot content',
      },
    });

    expect(wrapper.html()).toContain('slot content');
    expect(wrapper.find('.pagination').exists()).toBe(true);
    expect(wrapper.find('.job-pagination').exists()).toBe(true);
  });
});
