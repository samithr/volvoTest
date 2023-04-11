const StoryPage = require('../pageobjects/story.page');

describe('Test Story Page', () => {
    // Test watch story button
    it('Watch Story Button', async () => {
        if(StoryPage.btnWatchTheStory){
            expect(StoryPage.txtPolicyText).toHaveTextContaining("watch the story");
        }
    });
    // Test Pause story button
    it('Pause story button', async () => {
        if(StoryPage.btnPauseStory){
            expect(StoryPage.btnPauseStory).getAttribute('aria-label').toHaveTextContaining('pause');
            StoryPage.btnPauseStory.click();
        }
    });
    // Test Close Feedback close button
    it('Feedback close button', async () => {
        if(StoryPage.btnCloseFeedback){
            expect(StoryPage.btnCloseFeedback).toHaveTextContaining('pause');
            StoryPage.btnCloseFeedback.click();
        }
    });
    // Test Close Feedback button
    it('Close Feedback button', async () => {
        if(StoryPage.txtFeedback){
            expect(StoryPage.txtFeedback).toHaveTextContaining('Can you help us improve our website?');
        }
    });
    // Test Feedback button
    it('Feedback button', async () => {
        if(StoryPage.btnFeedback){
            expect(StoryPage.btnFeedback).toHaveTextContaining('Provide Feedback');
            StoryPage.btnFeedback.click();
        }
    });

    // Test Statement div
    it('Statement area ', async () => {
        if(StoryPage.divStatement){
            expect(StoryPage.btnFeedback).toHaveTextContaining('Provide Feedback');
        }
    });

     // Test Statement div
     it('Icons area ', async () => {
        if(StoryPage.divIcons){
            expect(StoryPage.divIcons).toHaveTextContaining('Provide Feedback');
        }
    });

     // Test Statement div
     it('Icons area ', async () => {
        if(StoryPage.divIcons){
            expect(StoryPage.divIcons).toHaveTextContaining('Provide Feedback');
        }
        if(StoryPage.divIcons.isExisting){
            console.log(StoryPage.divIcons.isExisting);
        }
    });

     // Test Video Testimonials
     it('Video Testimonials area ', async () => {
        if(StoryPage.divVideoTestimonials.isExisting){
            expect(StoryPage.divVideoTestimonials).toHaveTextContaining('Hear the stories from real car crash survivors and see how they\'ve managed to turn an accident into a positive change in their lives.');
        }
    });

     // Test Image and Text
     it('Video Image and Text area ', async () => {
        if(StoryPage.divImageText.isExisting){
            expect(StoryPage.divVideoTestimonials).toHaveTextContaining('Decades of innovation');
        }
    });
})
