import { defineConfig } from 'cypress'

export default defineConfig({
  env: {
    url: "https://rahulshettyacademy.com"
  },
  e2e: {
    // Configure your E2E tests here
    specPattern: "cypress/e2e/**/*.{cy,spec}.{js,ts}"
  },
})