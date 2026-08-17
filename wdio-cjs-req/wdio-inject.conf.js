const { default: _ui5Service } = require("wdio-ui5-service");
const {config: baseConfig} = require("./wdio.conf")
const ui5Service = new _ui5Service();
const config = {...baseConfig}

module.exports = { config }
