const CookiePage = require('../pageobjects/cookie.page');

describe('Test cookies', () => {
    // Test Cookies info exists
    it('Cookies info', async () => {
        if(CookiePage.txtPolicyText){
            expect(CookiePage.txtPolicyText).toHaveTextContaining("We use cookies and local storage for the best experience on our website, including to personalise content and ads, to provide social media features and to analyse traffic. These cookies include targeted media cookies and advanced analytics cookies. For more information see our Information Notice on the cookie page. By clicking accept you agree to our use of cookies and local storage. To alter the types of cookies we use click “Cookie Settings");
        }
    });
    // Test Accept Cookies button exists
    it('Accept cookies', async () => {
        if(CookiePage.btnAcceptCookies){
            expect(CookiePage.btnAcceptCookies).toHaveTextContaining("Accept");
            CookiePage.btnAcceptCookies.click();
        }
    });
    // Test Cookies settings button exists
    it('Cookie settings', async () => {
        if(CookiePage.btnCookieSettings){
            expect(CookiePage.btnCookieSettings).toHaveTextContaining("Cookie Settings");
            CookiePage.btnCookieSettings.click();
        }
    });
})
