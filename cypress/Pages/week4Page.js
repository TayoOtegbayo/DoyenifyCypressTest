class Week4Obj {
  launchURL() {
    return cy.visit("/");
  }
  assertLaunchURL() {
    return cy.location("pathname").should("eq", "/parabank/index.htm");
  }
  assertRegisterPage() {
    return cy.location("pathname").should("contain", "register.htm");
  }
  register() {
    return cy.contains("Register").click();
    //return cy.get('a[href="register.htm"]')
  }
  firstName() {
    return cy
      .get(".form2")
      .within(() => {
        cy.get('input[id="customer.firstName"]').type("Doyenify");
      })
      .get('input[id="customer.firstName"]')
      .type("Doyenify");
  }
  lastName() {
    return cy.get(".form2").within(() => {
      cy.get('input[id="customer.lastName"]').type("Academy");
    });
  }
  streetName() {
    return cy.get(".form2").within(() => {
      cy.get('input[id="customer.address.street"]').type("234, Solhue ");
    });
  }
  cityName() {
    return cy.get(".form2").within(() => {
      cy.get('input[id="customer.address.city"]').type("Tallinn ");
    });
  }
  stateName() {
    return cy.get(".form2").within(() => {
      cy.get('input[id="customer.address.state"]').type("Lagos ");
    });
  }
  zipCode() {
    return cy.get(".form2").within(() => {
      cy.get('input[id="customer.address.zipCode"]').type("2344 ");
    });
  }
  phoneNumber() {
    return cy.get(".form2").within(() => {
      cy.get('input[id="customer.phoneNumber"]').type("23443453 ");
    });
  }
  SSN() {
    return cy.get(".form2").within(() => {
      cy.get('input[id="customer.ssn"]').type("232 ");
    });
  }
  userName() {
    return cy.get(".form2").within(() => {
      cy.get('input[id="customer.username"]').type("DoyenifyWeek6");
    });
  }
  password() {
    return cy.get(".form2").within(() => {
      cy.get('input[id="customer.password"]').type("Password1");
    });
  }
  confirmPassword() {
    return cy.get(".form2").within(() => {
      cy.get("#repeatedPassword").type("Password1");
    });
  }
  Registered() {
    return cy.get(".form2").find(".button").click();
  }
  assertRegistration(){
    cy.contains('Welcome')
  }
}
export default new Week4Obj();
