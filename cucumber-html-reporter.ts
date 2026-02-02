import { generate } from "multiple-cucumber-html-reporter";

generate({
    jsonDir: "./cypress/cucumberReports", // dossier JSON
    reportPath: "./cypress/cucumberReports/html", // sortie HTML
    metadata: {
        browser: {
            name: "chrome",
            version: "144.0.7559.110",
        },
        device: "Local test machine",
        platform: {
            name: "osx",
            version: "12.7.6",
        },
    },
    customData: {
        title: "Run info",
        data: [
            { label: "Project", value: "CypressEcommerceAutomation" },
            { label: "Release", value: "1.2.3" },
            { label: "Cycle", value: "B11221.34321" },
            { label: "Execution Start Time", value: new Date().toLocaleString() },
            { label: "Execution End Time", value: new Date().toLocaleString() },
        ],
    },
});
