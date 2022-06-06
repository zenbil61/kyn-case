import { mount } from '@vue/test-utils';
import Filter from './Filter.vue';

describe('Filter.vue', () => {
  it('Filter test', () => {
    const wrapper = mount(Filter, {
      slots: {
        default: 'Main Content',
      },
      props: { title: 'Şehir Filtresi' },
    });

    expect(wrapper.classes('filter-row')).toBeTruthy();
    expect(wrapper.find('div').html()).toContain('Main Content');
    expect(wrapper.find('label').text()).toBe('Şehir Filtresi');
  });
});
