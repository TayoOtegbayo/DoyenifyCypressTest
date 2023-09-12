///<reference types="cypress"/>

import week2Page from "../Pages/week2Page";

describe("Week 2 Lecture", () => {
  it("Interacting with typing of text", () => {
    cy.visit("/");
    week2Page.accessCard().click();
    cy.url().should("equal", "https://demoqa.com/elements");
    cy.location("pathname").should("eq", "/elements");
    cy.contains("Text Box").click();
    cy.get("#userName").type("Week2");
    cy.get("#userEmail").type("week2@doyenify.com");
    cy.get("#currentAddress").type("34, Tallinn");
    cy.get("#permanentAddress").type("week adress");
    cy.get("#submit").click();
    cy.get(".border").should("be.visible").and("contain", "Week2");
  });
  it.only("Check box", () => {
    week2Page.launchURL();
    week2Page.elementList();
    week2Page.checkBoxElementList();
    week2Page.checkBox();
    week2Page.result().should("be.visible");
  });
});
