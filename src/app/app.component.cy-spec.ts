import { AppComponent } from './app.component';
import { initEnv, mount } from 'cypress-angular-unit-test';
import { HttpClientModule } from '@angular/common/http';

describe('AppComponent', () => {

  before(() => {
    // Das hier funktioniert nicht, ladet euer Environment immer innerhalb der Tests!
    // initEnv(AppComponent, { imports: [ HttpClientModule ]});
  });

  it('should create the app', () => {
    // Laden des internen Testenvironment
    initEnv(AppComponent, { imports: [ HttpClientModule ]});
    // Mounten des Komponenten zum testen
    mount(AppComponent);

    // Ab hier kann mit Cypress fortgefahren werden!
    cy.contains('Test title')
      .should('be.visible')
      .should('have.text', 'Test title app is running!');
  });

  it(`should have as title 'Angular-Test-Titel'`, () => {
    // Laden des internen Testenvironment
    initEnv(AppComponent, { imports: [ HttpClientModule ]});
    // Mounten des Komponenten zum Testen
    mount(AppComponent, { title: 'Angular-Test-Titel' });

    // Ab hier kann mit Cypress fortgefahren werden
    cy.contains('Angular-Test-Titel')
      .should('be.visible')
      .should('have.text', 'Angular-Test-Titel app is running!');
  });
});
