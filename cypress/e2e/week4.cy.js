///<reference types= 'cypress'/>

import week4Page from "../Pages/week4Page";

describe("Week 4 lesson using Hooks", () => {
beforeEach('', () =>{
    week4Page.launchURL()
})

  it("Launch URL and assess the register page", () => {
    week4Page.assertLaunchURL()
    week4Page.register();
    week4Page.assertRegisterPage()
  });

  it('Registration', () => {
    week4Page.register();
    week4Page.firstName()
    week4Page.lastName()
    week4Page.streetName()
    week4Page.cityName()
    week4Page.stateName()
    week4Page.zipCode()
    week4Page.phoneNumber()
    week4Page.SSN()
    week4Page.userName()
    week4Page.password()
    week4Page.confirmPassword()
    week4Page.Registered()
    week4Page.assertRegistration()
  });
});

//hooks , beforeeach, before, aftereach, after
