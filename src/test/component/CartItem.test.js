import { mount } from '@vue/test-utils';
import CartItem from '../../components/CartItem.vue';
import { expect, test, describe } from 'vitest';
import { configureAxe } from 'vitest-axe';

// Step 2
import { reportViolations } from '../utils/generateHtmlReport';

describe('Cart Item Component', () => {
  test("Functionality - Cart Item", () => {
    const wrapper = mount(CartItem, {
      props: {
        saberName: 'Windu Saber'
      }
    });
    expect(wrapper.exists()).toBe(true);
  });

  test("Accessibility check", async () => {
    const wrapper = mount(CartItem, {
      props: {
        itemName: 'Football shirt'
      }
    });
    const axe = configureAxe({
      runOnly: {
        type: 'tag',
        values: ['wcag2a', 'wcag2aa'], // WCAG 2 Level A and Level AA
      },
    });
    const results = await axe(wrapper.element);
    console.log(results.violations)
    reportViolations(results.violations, 'CartItem');
    expect(results.violations.length).toBe(0);
  });
});
