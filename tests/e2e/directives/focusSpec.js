describe("e2e", function () {
    beforeEach(function () {
        browser().navigateTo("../../app/index.html");
    });

    it("Should start", function () {
        setTimeout(function () {
            expect(element('.player-widget').count().toBe(3));
        }, 100)
        sleep(1);
    })
}) ;