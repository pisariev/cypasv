import LoginPage from '../pages/login.page';
import ProfilePage from '../pages/profile.page';

describe('Auth', function() {
    beforeEach(function() {
        LoginPage.open();
    });

    it('successful log in', function() {
        LoginPage.login('ipisaryev@gmail.com', '31101967');
        ProfilePage.iconAvatar.should('be.visible');
    });

    it('wrong credentials throws error', function() {
        LoginPage.login('invalid@example.com', 'invalid');
        LoginPage.notification.should('contain.text', 'Auth failed');
    });

    it('email format validation', function() {
        LoginPage.inputEmail.type('invalid');
        LoginPage.emailValidation.should('contain.text', '\'email\' is not a valid email');
    });

    it('email required validation', function() {
        LoginPage.inputEmail.type('invalid@example.com');
        LoginPage.inputEmail.smartClear();
        LoginPage.emailValidation.should('contain.text', 'Required');
    });

    it('password required validation', function() {
        LoginPage.inputPassword.type('invalid');
        LoginPage.inputPassword.clear();
        LoginPage.passwordValidation.should('contain.text', 'Required');
    });
});