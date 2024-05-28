import { mount } from '@vue/test-utils';
import Listing from '../../components/Listing.vue';
import { expect, test, describe, beforeAll } from 'vitest';
import { configureAxe } from 'vitest-axe';

// Step 2
import { reportViolations } from '../utils/generateHtmlReport';

describe('Listing Component', () => {
  let wrapper;

  beforeAll(() => {
    wrapper = mount(Listing, {
      props: {
        itemName: 'Soccer Ball',
        itemDetails: 'High-quality soccer ball designed for durability and performance in any game.',
        imageSrc: 'https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/11d17347-2265-45ce-8eb6-a22b0282918a/academy-voetbal-CkKSGj.png'
      }
    });
  });

  test("Functionality - Listing Details Check", () => {
    const saberName = wrapper.find('[data-test-id="itemName"]');
    expect(saberName.exists()).toBe(true);
    expect(saberName.text()).toBe("Soccer Ball");
  });

  test("Accessibility check", async () => {
    const axe = configureAxe({
      runOnly: {
        type: 'tag',
        values: ['wcag2a', 'wcag2aa'], // WCAG 2 Level A and Level AA
      },
    });
    const results = await axe(wrapper.element);
    reportViolations(results.violations, 'Listing');
    expect(results.violations.length).toBe(0);
  });
});
