///<reference types= 'cypress'/>

import week2Page from "../Pages/week2Page";

describe("Week3 lecture", () => {
  it("Test elements functionality", () => {
    week2Page.launchURL();
    week2Page.elementList();
    week2Page.buttonElementList()
    week2Page.doubleClickButton()
    week2Page.doubleClickMessage()
  });
});
