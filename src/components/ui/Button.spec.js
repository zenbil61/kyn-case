import { shallowMount } from '@vue/test-utils';
import Button from './Button.vue';

describe('HelloWorld.vue', () => {
  it('renders props.msg when passed', () => {
    const wrapper = shallowMount(Button, {
      slots: {
        default: 'Main Content',
      },
    });

    expect(wrapper.html()).toContain('Main Content');
  });
});
