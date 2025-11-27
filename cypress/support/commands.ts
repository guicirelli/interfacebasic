// Custom Cypress commands
Cypress.Commands.add('dataCy', (value: string) => {
  return cy.get(`[data-cy=${value}]`);
});

Cypress.Commands.add('login', () => {
  // Mock login for testing
  cy.window().then((win) => {
    win.localStorage.setItem('auth-token', 'mock-token');
  });
});

Cypress.Commands.add('checkA11y', () => {
  // Check accessibility using axe-core
  // @ts-ignore - axe-core types
  cy.injectAxe();
  // @ts-ignore - axe-core types
  cy.checkA11y();
});

Cypress.Commands.add('waitForAnimations', () => {
  // Wait for CSS animations and transitions to complete
  cy.wait(500); // Adjust timing as needed
});

Cypress.Commands.add('checkComponentA11y', () => {
  // Check component accessibility
  // @ts-ignore - axe-core types
  cy.injectAxe();
  // @ts-ignore - axe-core types
  cy.checkA11y();
});
