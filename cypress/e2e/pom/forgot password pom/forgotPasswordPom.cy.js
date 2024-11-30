export default class forgotPassword {

   static forgotPasswordText(){
    return cy.get('[class="orangehrm-login-forgot"]');
   }
   
    static inputUsername(){
        return cy.get('[name="username"]');
    }

    static buttonReset(){
        return cy.get('[type="submit"]');
    }

    static buttonCancel(){
        return cy.get('[type="button"]')
    }
}