import { shallowMount } from '@vue/test-utils';
import Header from './Header.vue';

describe('HelloWorld.vue', () => {
  it('renders props.msg when passed', () => {
    const wrapper = shallowMount(Header, {
      slots: {
        default: 'Main Content',
      },
    });

    expect(wrapper.html()).toContain('Main Content');
  });
});
