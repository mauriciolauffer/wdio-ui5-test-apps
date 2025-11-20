const config = {
    wdi5: {
        logLevel: "verbose"
    },
    baseUrl: "https://ui5.sap.com/1.136.10/test-resources/sap/m/demokit/orderbrowser/webapp/test/mockServer.html",

    // services: ["ui5"],
    // waitforTimeout: 30000,
    specs: [__MUST_BE_DEFINED__],
    maxInstances: 1,
    capabilities: [
        {
            maxInstances: 1,
            // "wdio:enforceWebDriverClassic": true,
            browserName: "chrome",
            browserVersion: "stable",
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
