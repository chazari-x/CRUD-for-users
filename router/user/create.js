const Users = require('../../user/user');

// Handle POST request for /users
// body: {name: string, email: string}
// Creates a new user
module.exports = (req, res) => {
    let body = '';
    req.on('data', chunk => {
        body += chunk;
    });

    req.on('end', () => {
        const parsedBody = new URLSearchParams(body);
        const name = parsedBody.get('name');
        const email = parsedBody.get('email');
        if (!name || !email) {
            res.writeHead(400);
            res.end(JSON.stringify({ message: 'Name and email are required' }));
            return;
        }

        res.writeHead(201);
        res.end(JSON.stringify({ message: 'User created', id: Users.create({ name, email })}));
    });
}