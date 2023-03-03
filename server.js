const http = require('http');

const server = http.createServer((req, res) => {

    res.write("hello this is http module");
    res.end();
})

server.listen(9000)