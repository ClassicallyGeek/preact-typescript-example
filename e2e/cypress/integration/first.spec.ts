describe("<App/>", () => {
    before(() => {
        cy.visit("http://localhost:8080");
    });
    it("Has a Header", () => {
        cy.get("header").should("have.length", 1);
    });
});
