const { exec } = require("child_process");
require('dotenv').config()

const isAdmobPlusCordovaPluginNotInstalled = plugins => {
  const admobPlusCordovaPlugins = plugins.filter(plugin => plugin.includes('admob-plus-cordova'))

  return !admobPlusCordovaPlugins.length
}


module.exports = context => {
  const plugins = context.opts.plugins
  if (isAdmobPlusCordovaPluginNotInstalled(plugins)) return
  
  if (!(context.opts.cli_variables.APP_ID_ANDROID === "ca-app-pub-xxx~yyy")) return
  
  exec("cordova plugin rm --nosave admob-plus-cordova", () => {
    exec("cordova plugin add admob-plus-cordova --nosave --variable APP_ID_ANDROID=" 
      +  process.env.APP_ID_ANDROID)
  })
}
