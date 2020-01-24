describe("<App/>", () => {
    before(() => {
        cy.visit('/');
    });
    it("Has a Header", () => {
        cy.get("header").should("have.length", 1);
    });
    it("has a button that is clicky clicky clickable", () => {
        const stub = cy.stub();
        cy.on ('window:alert', stub);
        cy.percySnapshot();
        cy.get('button').contains('I am a Button').click()
            .then(() => {
                expect(stub.getCall(0)).to.be.calledWith('hi');
            })

    });
});
