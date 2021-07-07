/// <reference types="cypress" />

describe('Test adding object', () => {
  beforeEach(() => {
    cy.visit('http://localhost:4200/sights-list');
  });

  it('should add sights to list', () => {
    cy.get('.add-btn').click();
    cy.get('input[formControlName="name"]').type('Testowy obiekt');
    cy.get('input[formControlName="longitude"]').type('20');
    cy.get('input[formControlName="latitude"]').type('20');
    cy.get('input[formControlName="country"]').type('Poland');
    cy.get('input[formControlName="countryCode"]').type('PL');
    cy.get('textarea[formControlName="description"]').type('a'.repeat(250)).blur();
    cy.get('mat-select[formControlName="color"]').click().get('mat-option').contains('#54CCE2').click();
    cy.get('.submit').click();
    cy.wait(1000);
  });
  it('should show error message when field is empty', () => {
    cy.get('.add-btn').click();
    cy.get('input[formControlName="name"]').focus().blur();
    cy.contains('Name is required!');
    cy.get('input[formControlName="longitude"]').focus().blur();
    cy.contains('Longitude is required!');
    cy.get('input[formControlName="latitude"]').focus().blur();
    cy.contains('Latitude is required!');
    cy.get('input[formControlName="country"]').focus().blur();
    cy.contains('Country name is required!');
    cy.get('input[formControlName="countryCode"]').focus().blur();
    cy.contains('Country Code is required!');
    cy.get('textarea[formControlName="description"]').focus().blur();
    cy.contains('Description is required!');
    cy.get('mat-select[formControlName="color"]').focus().blur();
    cy.contains('Color is required!');
    cy.wait(2000);
  });
  it('should show error fields when type bad text', () => {
    cy.get('.add-btn').click();
    cy.wait(300);
    cy.get('input[formControlName="longitude"]').type('300.52555').blur();
    cy.contains('Longitude is bad!');
    cy.get('input[formControlName="latitude"]').type('900.455454').blur();
    cy.contains('Latitude is bad!');
    cy.get('textarea[formControlName="description"]').type('s'.repeat(500)).blur();
    cy.contains('Max Length is 256 chars!');
  });
});
