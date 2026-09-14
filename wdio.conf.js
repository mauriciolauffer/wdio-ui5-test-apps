const config = {
    wdi5: {
        logLevel: "error"
    },
    baseUrl: "https://ui5.sap.com/1.136.21/test-resources/sap/m/demokit/orderbrowser/webapp/test/mockServer.html",
    services: ["ui5"],
    // specs: [SET SOMETHING HERE],
    maxInstances: 1,
    capabilities: [
        {
            maxInstances: 1,
            browserName: "chrome",
            // browserVersion: "stable",
            "goog:chromeOptions": {
                args: process.argv.includes("--headless")
                    ? ["window-size=1440,800", "headless", "disable-gpu"]
                    : ["window-size=1440,800"]
            }
        }
    ],
    logLevel: "error",
    reporters: ["spec"],
    framework: "mocha"
}

module.exports = { config }
