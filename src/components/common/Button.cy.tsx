import React from 'react';
import { Button } from '@/components/common/Button';
import { Modal } from '@/components/common/Modal';

describe('Button Component', () => {
  it('renders with default props', () => {
    cy.mount(<Button>Click me</Button>);
    cy.get('button').should('contain', 'Click me');
    cy.get('button').should('have.class', 'btn');
  });

  it('renders with different variants', () => {
    cy.mount(<Button variant="primary">Primary</Button>);
    cy.get('button').should('have.class', 'btn-primary');
    
    cy.mount(<Button variant="outline">Outline</Button>);
    cy.get('button').should('have.class', 'btn-outline');
  });

  it('handles click events', () => {
    const onClick = cy.stub();
    cy.mount(<Button onClick={onClick}>Click me</Button>);
    cy.get('button').click();
    cy.wrap(onClick).should('have.been.called');
  });

  it('shows loading state', () => {
    cy.mount(<Button loading>Loading</Button>);
    cy.get('button').should('be.disabled');
    cy.get('button').should('contain', 'Loading...');
  });

  it('is accessible', () => {
    cy.mount(<Button aria-label="Test button">Click me</Button>);
    cy.checkComponentA11y();
  });
});

describe('Modal Component', () => {
  it('renders when open', () => {
    cy.mount(
      <Modal isOpen={true} onClose={cy.stub()}>
        <p>Modal content</p>
      </Modal>
    );
    cy.get('[role="dialog"]').should('be.visible');
    cy.get('[role="dialog"]').should('contain', 'Modal content');
  });

  it('does not render when closed', () => {
    cy.mount(
      <Modal isOpen={false} onClose={cy.stub()}>
        <p>Modal content</p>
      </Modal>
    );
    cy.get('[role="dialog"]').should('not.exist');
  });

  it('calls onClose when close button is clicked', () => {
    const onClose = cy.stub();
    cy.mount(
      <Modal isOpen={true} onClose={onClose}>
        <p>Modal content</p>
      </Modal>
    );
    cy.get('button[aria-label="Fechar"]').click();
    cy.wrap(onClose).should('have.been.called');
  });

  it('is accessible', () => {
    cy.mount(
      <Modal isOpen={true} onClose={cy.stub()} title="Test Modal">
        <p>Modal content</p>
      </Modal>
    );
    cy.checkComponentA11y();
  });
});
