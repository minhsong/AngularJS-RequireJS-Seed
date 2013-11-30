describe("Font end tests", function () {
   beforeEach(function () {
       browser().navigateTo('../../index.html');
   });

    it("Ngbk Input should have focus", function () {
        setTimeout(function () {
            expect(element(".focus").count()).toBe(1);
        }, 100);

    })
});
