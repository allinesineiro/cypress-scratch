const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl: "https://notes-serverless-app.com",
    experimentalSessionSupport: true,
    chromeWebSecurity: false,
    experimentalStudio: true,
    env: {
      "viewportWidthBreakpoint": 768
    },
    projectId: "9agxqa",
    theme: "Halloween "
    },
  },
);
