import { defineConfig } from 'cypress';
import createBundler from "@bahmutov/cypress-esbuild-preprocessor";
import { addCucumberPreprocessorPlugin } from "@badeball/cypress-cucumber-preprocessor";
import { createEsbuildPlugin } from "@badeball/cypress-cucumber-preprocessor/esbuild";

async function setupNodeEvents(on, config) {
  // 1. Initialisation obligatoire pour Cucumber
  await addCucumberPreprocessorPlugin(on, config);

  // 2. Configuration du bundler (esbuild)
  on(
      "file:preprocessor",
      createBundler({
        plugins: [createEsbuildPlugin(config)],
      })
  );

  // 3. Intégration du reporter
  require('cypress-mochawesome-reporter/plugin')(on);

  return config;
}

export default defineConfig({
  reporter: 'cypress-mochawesome-reporter',
  env: {
    url: "https://rahulshettyacademy.com"
  },
  projectId: "z89ekw",
  e2e: {
    setupNodeEvents,
    specPattern: [
      "cypress/e2e/**/*.{cy,spec}.{js,ts}",
      "cypress/e2e/**/*.feature"
    ]
  },
});