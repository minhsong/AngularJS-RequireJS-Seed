describe("Font end tests", function () {
   beforeEach(function () {
       browser().navigateTo('../../index.html');
   });

    it("Control class should exist", function () {
        expect(element(".control").count()).toBe(1);
    });

    it("Ngbk Input should have focus", function () {
        setTimeout(function () {
            expect(element(".focus").count()).toBe(1);
        }, 100);

    })
});
