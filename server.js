const http = require('http');
const router = require('./router/router');

const server = http.createServer(router);

server.listen(3000, () => {
    console.log('Server is running on http://localhost:3000/users');
});