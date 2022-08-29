
const http = require('http')

const server = http.createServer((req, res) => {
    if (req.url === '/') {
        res.end('welcome to our homepage')
    }
 if (req.url === '/about'){
    res.end('here is our short message')
 }

 res.end(`
 <h1>Oops!</h1>
 <p> we dont  have the page tht youre looking for </p>
 <a href="/"> back home</a>
  `)

})

server.listen(1200)