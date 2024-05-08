const http = require('http') //có sẵn trong nodejs

const hostname = 'localhost'; //localhost
const port = 3000;

const server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.end('Hello World\n');
});

server.listen(port, hostname, () => {
    console.log(`Server is running at http://${hostname}:${port}/ `)
})

