export default class dasboardMenu {


    static iputUsername(){
        return cy.get('[name="username"]');
    }
    static inputPassword(){
        return cy.get('[name="password"]');
    }
    static triggerButton(){
        return cy.get('[type="submit"]');
    }
    static resetButton(){
        return cy.get('[type="reset"]');
    }

}
