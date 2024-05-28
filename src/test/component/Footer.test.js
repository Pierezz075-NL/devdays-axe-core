import { mount } from '@vue/test-utils';
import Footer from '../../components/Footer.vue';
import { expect, test, describe } from 'vitest';
import { axe } from 'vitest-axe';

// Step 2
import { reportViolations } from '../utils/generateHtmlReport';

describe('Footer Component', () => {
  test("Functionality - Component has loaded", () => {
    const wrapper = mount(Footer);
    expect(wrapper.find('h5[role="heading"]').text()).toBe("Contact Us");
  });

  test("Functionality - List number", () => {
    const wrapper = mount(Footer);
    const list = wrapper.find('[data-test-id="footList"]');
    expect(list.exists()).toBe(true);
    expect(list.element.childElementCount).toBe(4);
  });

  test("Accessibility check", async () => {
    const wrapper = mount(Footer);
    const results = await axe(wrapper.element);
    console.log(results.violations)
    reportViolations(results.violations, 'Footer');
    expect(results.violations.length).toBe(0);
  });
});
