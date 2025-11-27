// @ts-ignore - cypress/react18 types
import { mount } from 'cypress/react18';
import './commands';

// Global test configuration for component tests
beforeEach(() => {
  // Reset any global state before each test
});

// Custom commands for component testing
declare global {
  namespace Cypress {
    interface Chainable {
      /**
       * Custom command to mount React components
       * @example cy.mount(<MyComponent />)
       */
      mount: typeof mount;
      
      /**
       * Custom command to check component accessibility
       * @example cy.checkComponentA11y()
       */
      checkComponentA11y(): Chainable<void>;
    }
  }
}

// Make mount available globally
Cypress.Commands.add('mount', mount);
