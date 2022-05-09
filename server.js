const http = require('http')
const port = 8080
const host = 'localhost'

const requestListener = (req, res) => {
  res.writeHead(200)
  res.end('Hellooooo')
}

const server = http.createServer(requestListener)
server.listen(port, host, () => {
  console.log(`Server is running on http://${host}:${port}`)
})
