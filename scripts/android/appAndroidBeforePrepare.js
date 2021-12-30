const { exec } = require("child_process");
require('dotenv').config()

module.exports = () => {
    exec("cordova plugin add admob-plus-cordova --nosave --variable APP_ID_ANDROID=" +  process.env.APP_ID_ANDROID)
}