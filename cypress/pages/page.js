export default class Page {
    open() {
        return cy.visit('/user/login');
    }
}