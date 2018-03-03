const path = require('path')
const express = require('express')
const bodyParser = require('body-parser')

const server = express()

server.use(bodyParser.json())
server.use(express.static(path.join(__dirname, './public')))

// for BrowserRouter
server.get('*', (req, res) => res.sendFile(`${__dirname}/public/index.html`))

module.exports = server
