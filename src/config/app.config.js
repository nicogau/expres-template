
const appConfig  = require("./app.config.json")

const config = () => {
  let environement = process.env.NODE_ENV

  return {
    port: appConfig[environement].appPort 
  }
}

module.exports =  config
