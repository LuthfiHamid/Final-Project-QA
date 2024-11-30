/// <reference types='cypress' />
import loginPage from "../../pom/login pom/loginPom.cy"

describe('login test', () => {
   
   beforeEach(() => {
    cy.intercept('GET','https://opensource-demo.orangehrmlive.com/web/index.php/api/v2/dashboard/employees/action-summary').as('actionSumary');
    cy.intercept('GET','https://opensource-demo.orangehrmlive.com/web/index.php/api/v2/dashboard/employees/subunit').as('subunit');
   })
   
   
   
   
    it.only('login test with valid credential', () => {
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login'),
            loginPage.verifyLoginPage().contains('Login')
                .should('have.text', 'Login'),
            loginPage.inputUsername().type('Admin'),
            loginPage.inputPassword().type('admin123'),
            loginPage.buttonLogin().click(),
            cy.wait('@actionSumary');
            cy.wait('@subunit');
            cy.get('img[alt="client brand banner"]')
                .should('be.visible')
                .log('login succesfull')
    })

    it.only('login test with invalid credentials', () => {
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login'),
            loginPage.inputUsername().type('Admin123'),
            loginPage.inputPassword().type('admin'),
            loginPage.buttonLogin().click(),
            cy.get('[role="alert"]')
                .log('login failed')
    })

    it.only('login test without credential', () =>{
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login'),
            loginPage.inputUsername(),
            loginPage.inputPassword(),
            loginPage.buttonLogin().click(),
            cy.get('span').contains('Required').should('have.text','Required')
    })



})