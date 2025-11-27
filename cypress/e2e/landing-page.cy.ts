describe('Flowly Landing Page E2E Tests', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  describe('Page Load and Basic Functionality', () => {
    it('should load the homepage successfully', () => {
      cy.get('h1').should('contain', 'Organize suas tarefas');
      cy.title().should('contain', 'Flowly');
    });

    it('should have proper meta tags', () => {
      cy.get('meta[name="description"]').should('exist');
      cy.get('meta[property="og:title"]').should('exist');
      cy.get('meta[property="og:description"]').should('exist');
    });

    it('should be responsive', () => {
      // Test mobile viewport
      cy.viewport(375, 667);
      cy.get('h1').should('be.visible');
      
      // Test tablet viewport
      cy.viewport(768, 1024);
      cy.get('h1').should('be.visible');
      
      // Test desktop viewport
      cy.viewport(1280, 720);
      cy.get('h1').should('be.visible');
    });
  });

  describe('Navigation and CTAs', () => {
    it('should have working navigation links', () => {
      cy.get('nav a[href="#hero"]').click();
      cy.url().should('include', '#hero');
      
      cy.get('nav a[href="#about"]').click();
      cy.url().should('include', '#about');
    });

    it('should have functional CTA buttons', () => {
      cy.get('button').contains('Começar grátis').should('be.visible');
      cy.get('button').contains('Ver demonstração').should('be.visible');
    });

    it('should have floating CTA button', () => {
      cy.scrollTo('bottom');
      cy.get('[data-cy="floating-cta"]').should('be.visible');
    });
  });

  describe('Interactive Elements', () => {
    it('should open demo modal when clicking demo button', () => {
      cy.get('button').contains('Ver demonstração').click();
      cy.get('[role="dialog"]').should('be.visible');
      cy.get('button[aria-label="Fechar"]').click();
      cy.get('[role="dialog"]').should('not.exist');
    });

    it('should close top ribbon when clicking close button', () => {
      cy.get('[data-cy="top-ribbon"]').should('be.visible');
      cy.get('[data-cy="top-ribbon"] button[aria-label="Fechar"]').click();
      cy.get('[data-cy="top-ribbon"]').should('not.exist');
    });

    it('should toggle theme when clicking theme button', () => {
      cy.get('button[aria-label="Alternar tema"]').click();
      cy.get('html').should('have.class', 'dark');
      cy.get('button[aria-label="Alternar tema"]').click();
      cy.get('html').should('not.have.class', 'dark');
    });
  });

  describe('Accessibility', () => {
    it('should be keyboard navigable', () => {
      cy.get('body').focus();
      cy.focused().should('exist');
      
      // Test tab navigation through main elements
      cy.get('a, button').first().focus();
      cy.focused().should('exist');
    });

    it('should have proper ARIA labels', () => {
      cy.get('button[aria-label]').should('exist');
      cy.get('[role="dialog"]').should('exist');
      cy.get('[aria-label="Alternar tema"]').should('exist');
    });

    it('should have sufficient color contrast', () => {
      cy.checkA11y();
    });
  });

  describe('Performance', () => {
    it('should load within acceptable time', () => {
      cy.visit('/', {
        onBeforeLoad: (win) => {
          win.performance.mark('start');
        },
        onLoad: (win) => {
          win.performance.mark('end');
          win.performance.measure('loadTime', 'start', 'end');
          const measure = win.performance.getEntriesByName('loadTime')[0];
          expect(measure.duration).to.be.lessThan(3000); // 3 seconds
        },
      });
    });

    it('should have optimized images', () => {
      cy.get('img').each(($img) => {
        cy.wrap($img).should('have.attr', 'alt');
        cy.wrap($img).should('have.attr', 'loading', 'lazy');
      });
    });
  });

  describe('SEO and Meta', () => {
    it('should have proper structured data', () => {
      cy.get('script[type="application/ld+json"]').should('exist');
    });

    it('should have canonical URL', () => {
      cy.get('link[rel="canonical"]').should('exist');
    });

    it('should have proper Open Graph tags', () => {
      cy.get('meta[property="og:title"]').should('exist');
      cy.get('meta[property="og:description"]').should('exist');
      cy.get('meta[property="og:image"]').should('exist');
      cy.get('meta[property="og:url"]').should('exist');
    });
  });
});
