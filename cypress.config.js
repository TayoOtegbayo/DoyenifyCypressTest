const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl: "https://parabank.parasoft.com/",
    pageLoadTimeout: 6000,

    //pageLoadTimeout: 7000,
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
