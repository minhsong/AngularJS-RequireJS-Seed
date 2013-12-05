describe('angularjs homepage', function () {

    beforeEach(function () {
        browser.get('http://dev.karma.com');
    });

    it('Should have a model named yourName', function () {
        var greeting = element(by.binding('yourName'));

        expect(greeting.getText()).toEqual('Edgar');
    });


});
