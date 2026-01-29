import { defineConfig } from 'cypress';

export default defineConfig({
  reporter: 'cypress-mochawesome-reporter',
  env: {
    url: "https://rahulshettyacademy.com"
  },
 // retries:{
    // runMode: 1, //1 test failed tests
  // },
  projectId: "z89ekw",
  e2e: {
    setupNodeEvents(on, config) {
      // Intégration du plugin pour générer le rapport après les tests
      require('cypress-mochawesome-reporter/plugin')(on);
    },
    specPattern: "cypress/e2e/**/*.{cy,spec}.{js,ts}"
  },
});