/// <reference types="cypress" />
import dasboardMenu from "../../pom/dashboard pom/dashboardPom.cy"

describe('dashboard menu', () => {
    it.only('search employee by name', () => {
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
        dasboardMenu.iputUsername().type('Admin'),
        dasboardMenu.inputPassword().type('admin123'),
        dasboardMenu.triggerButton().click()
        cy.get('span').contains('Directory').should('have.text', 'Directory').click()
        cy.get('[placeholder="Type for hints..."]').type('Peter')
        cy.get('[class="oxd-autocomplete-wrapper"]').should('be.visible')
        cy.get('[role="listbox"]').contains('Peter Mac Anderson').click()
        dasboardMenu.triggerButton().contains(' Search ').click()
    })
    it.only('search employee by job title', () => {
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
        dasboardMenu.iputUsername().type('Admin')
        dasboardMenu.inputPassword().type('admin123')
        dasboardMenu.triggerButton().click()
        cy.get('span').contains('Directory').should('have.text', 'Directory').click()  
        cy.get('.oxd-select-text').eq(0).click()
        cy.get('.oxd-select-option').contains('Chief Financial Officer').click();
        dasboardMenu.triggerButton().contains(' Search ').click()

    })
    it.only('search employee by location', () => {
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
        dasboardMenu.iputUsername().type('Admin')
        dasboardMenu.inputPassword().type('admin123')
        dasboardMenu.triggerButton().click()
        cy.get('span').contains('Directory').should('have.text', 'Directory').click()  
        cy.get('.oxd-select-text').eq(0).click()
        cy.get('.oxd-select-option').contains('Chief Financial Officer').click();
        cy.get('.oxd-select-text').eq(1).click()
        cy.get('.oxd-select-option').contains('New York Sales Office').click();
        dasboardMenu.triggerButton().contains(' Search ').click() 

    })

})

