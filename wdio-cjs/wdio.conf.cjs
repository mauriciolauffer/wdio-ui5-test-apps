// Import/require to test whether ESM/CJS modules are working as expected
const _wdi5 = require("wdio-ui5-service")
const {config: baseConfig} = require("../wdio.conf")

const config = {
    ...baseConfig,
    specs: ["./*.test.{js,cjs}"],
}

module.exports = { config }
