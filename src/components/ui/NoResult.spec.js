import { mount } from '@vue/test-utils';
import NoResult from './NoResult.vue';

describe('NoResult.vue', () => {
  it('No Result test', () => {
    const wrapper = mount(NoResult);

    expect(wrapper.html()).toBe(
      `<div class="no-result">
  <h1>404</h1>
  <p>Sonuç Bulunamadı..</p>
</div>`
    );
  });
});
