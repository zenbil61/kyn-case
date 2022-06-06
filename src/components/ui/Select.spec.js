import { mount } from '@vue/test-utils';
import Select from './Select.vue';

const data = [
  { text: 'text 1', value: 'val1' },
  { text: 'text 2 ', value: 'val2' },
];
describe('Select.vue', () => {
  it('Select test', () => {
    const wrapper = mount(Select, {
      slots: {
        default: 'slot content',
      },
    });

    expect(wrapper.classes('form-select')).toBe(true);

    const options = wrapper.findAll('option');
    expect(options.length).toBe(1);
    expect(options.at(0).text()).toBe('Seçim Yapın');
  });

  it('Select data', () => {
    const wrapper = mount(Select, {
      slots: {
        default: 'slot content',
      },
      props: { data, value: data[1].value },
    });

    const options = wrapper.findAll('option');
    expect(options.at(2).attributes().value).toBe(data[1].value);
  });
});
