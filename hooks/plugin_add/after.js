const { exec } = require("child_process");
require('dotenv').config()

module.exports = context => {
  if (!context.opts.plugins.includes("admob-plus-cordova")) return
  
  if (!(context.opts.cli_variables.APP_ID_ANDROID === "ca-app-pub-xxx~yyy")) return
  
  exec("cordova plugin rm --nosave admob-plus-cordova", () => {
    exec("cordova plugin add admob-plus-cordova --nosave --variable APP_ID_ANDROID=" 
      +  process.env.APP_ID_ANDROID)
  })
}