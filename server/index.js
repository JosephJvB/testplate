const server = require('./server')

const PORT = process.env.PORT || 3000

server.listen(PORT, () => console.log(`server-listening@port: [${PORT}]`))
