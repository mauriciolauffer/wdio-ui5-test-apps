// Import/require to test whether ESM/CJS modules are working as expected
import _wdi5 from "wdio-ui5-service"
import {config as baseConfig} from "../wdio.conf.js"

export const config = {
    ...baseConfig,
    specs: ["./*.test.{js,mjs}"],
}
