/* global cy */

describe("Drawing App", function () {
	it("Visits the app and loads the canvas", function () {
		cy.visit("");
		cy.title().should("contain", "ST Apprentice Challenge");
		cy.get("h1").should("contain", "Pen");
		cy.get("canvas").should("exist");
	});
	it("Changes line type when clicked", function () {
		cy.get(".line-types__option").eq(1).click()
			.should("contain", "Dashed");
		cy.get(".line-types__option").eq(2).click()
			.should("contain", "Dotted");
		cy.get(".line-types__option").eq(0).click()
			.should("contain", "Solid");
	});
	it("Loads Eraser panel when clicked", function () {
		cy.get(".nav-bar__tool").eq(1).click();
		cy.get("h1").should("contain", "Eraser");
		cy.get("input[type=range]").should("have.value", "10");
		cy.get("#clear-btn").should("contain", "Clear Canvas");
	});
	it("Loads Stamp panel when clicked", function () {
		cy.get(".nav-bar__tool").eq(2).click();
		cy.get("h1").should("contain", "Stamp");
		cy.get("input[type=range]").should("have.value", "200");
		cy.get("input[type=file]").should("exist");
		cy.get("#uploaded-image").should("exist");
	});
	it("Loads Download panel when clicked", function () {
		cy.get(".nav-bar__tool").eq(3).click();
		cy.get("h1").should("contain", "Download");
		cy.get("#download-btn").should("contain", "Download Image");
	});
});
