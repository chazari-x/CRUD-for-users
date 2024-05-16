const Users = require('../../user/user');

// Handle PUT request for /users/:id
// body: {name: string, email: string}
// Updates a user by id
module.exports = (req, res, userId) => {
    if (userId === undefined || userId === null) {
        res.writeHead(400);
        res.end(JSON.stringify({ message: 'User ID is required' }));
        return;
    }

    let body = '';
    req.on('data', chunk => {
        body += chunk;
    });

    req.on('end', () => {
        const parsedBody = new URLSearchParams(body);
        const name = parsedBody.get('name');
        const email = parsedBody.get('email');
        if (!name && !email) {
            res.writeHead(400);
            res.end(JSON.stringify({ message: 'Name or email is required' }));
            return;
        }

        if (Users.update(userId, { name, email })) {
            res.end(JSON.stringify({ message: 'User updated' }));
        } else {
            res.writeHead(404);
            res.end(JSON.stringify({ message: 'User not found' }));
        }
    });
}