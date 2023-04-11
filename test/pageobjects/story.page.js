
const Page = require('./page');

class StoryPage extends Page {

    get btnWatchTheStory () {
        return $('.ff fg fh fi fj');
    }

    get btnAcceptCookies () {
        return $('.a ac aw ct cu cv cw cx cy cz da db dc dd de dn eb ed gw kx pk pl pm');
    }

    get btnCloseFeedback () {
        return $('.closeButton');
    }

    get txtFeedback () {
        return $('#textContainer');
    }

    get btnFeedback () {
        return $('#feedbackBtn');
    }

    get divStatement () {
        return $('#TextStatement-1');
    }

    get divIcons () {
        return $('#IconCallouts-1');
    }

    get divVideoTestimonials () {
        return $('#VideoTestimonials-1');
    }

    get divImageText () {
        return $('#ImageWithText-1');
    }
}

module.exports = new StoryPage();