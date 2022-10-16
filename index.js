const config = require("./src/config/app.config")
const {App} = require("./src/express/app")
// require('./env').env

const port = config().port

const app = new App()
console.log( `listen on port: ${port}`)
// console.log( `pass: ${process.env.PASS}`)
app.start()
