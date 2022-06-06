import { mount } from '@vue/test-utils';
import Job from './Job.vue';

describe('Job.vue', () => {
  it('Job test', () => {
    const wrapper = mount(Job, {
      slots: {
        default: 'Main Content',
      },
      props: { title: 'Hemşire', description: 'Hemşire aranıyor' },
    });
    expect(wrapper.find('.card-title').text()).toContain('Hemşire');
    expect(wrapper.find('.card-text').text()).toContain('Hemşire aranıyor');
  });
});
