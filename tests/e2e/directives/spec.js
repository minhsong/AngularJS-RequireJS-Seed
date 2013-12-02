describe("e2e", function () {
    beforeEach(function () {
        browser().navigateTo("/");
    });

    it("Should start", function () {
           expect(element('.player-widget').count().toBe(1));
    })
}) ;