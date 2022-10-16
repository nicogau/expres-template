const express = require ('express')
const router = express.Router 

class App {
  #port 

  constructor (port) {
    this.server = express()
    this.router = router()
    this.#port = port 
  }
  start() { 
    this.router.get('/', (req, res) => {res.send('bienvenue sur la page d\' accueil')})
    this.server.use(this.router)
    this.server.listen(this.#port, () => {console.log( 'server started on :' + this.#port)})}
}

module.exports  = { App }
