describe("e2e", function () {
    beforeEach(function () {
        browser().navigateTo("index.html");

    });
    it("Should start", function () {
        expect(element('.focus').count()).toBe(1);
    })
});