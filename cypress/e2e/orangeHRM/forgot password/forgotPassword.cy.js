/// <reference types='cypress' />
import forgotPassword from "../../pom/forgot password pom/forgotPasswordPom.cy"

describe('forgot password page', () => {
    it.only('reset password with valid credentials', () => {
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
        forgotPassword.forgotPasswordText().click()
        forgotPassword.inputUsername().type('Admin')
        forgotPassword.buttonReset().click()

    })

    it.only('reset password with invalid credentials', () => {
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
        forgotPassword.forgotPasswordText().click()
        forgotPassword.inputUsername()
        forgotPassword.buttonReset().click()
        cy.get('span').contains('Required').should('have.text', 'Required')

    })

    it.only('cancel reset password', () => {
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    forgotPassword.forgotPasswordText().click()
    forgotPassword.buttonCancel().click()
    cy.get('h5').contains('Login').should('be.visible')

    })
})
