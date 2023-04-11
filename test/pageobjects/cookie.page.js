
const Page = require('./page');

class CookiePage extends Page {

    get txtPolicyText () {
        return $('#onetrust-policy-text');
    }

    get btnPauseStory () {
        return $('#onetrust-accept-btn-handler');
    }

    get btnCookieSettings () {
        return $('#onetrust-pc-btn-handler');
    }
}

module.exports = new CookiePage();