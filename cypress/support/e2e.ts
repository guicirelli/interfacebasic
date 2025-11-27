import './commands';

// Global test configuration
beforeEach(() => {
  // Reset any global state before each test
  cy.clearLocalStorage();
  cy.clearCookies();
});

// Custom commands
declare global {
  namespace Cypress {
    interface Chainable {
      /**
       * Custom command to select DOM element by data-cy attribute.
       * @example cy.dataCy('greeting')
       */
      dataCy(value: string): Chainable<JQuery<HTMLElement>>;
      
      /**
       * Custom command to login with test credentials
       * @example cy.login()
       */
      login(): Chainable<void>;
      
      /**
       * Custom command to check accessibility
       * @example cy.checkA11y()
       */
      checkA11y(): Chainable<void>;
      
      /**
       * Custom command to wait for animations to complete
       * @example cy.waitForAnimations()
       */
      waitForAnimations(): Chainable<void>;
    }
  }
}
