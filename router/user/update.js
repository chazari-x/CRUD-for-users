const Users = require('../../user/sql');

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

    req.on('end', async () => {
        let user = {};
        for (const [key, value] of new URLSearchParams(body)) {
            user[key] = value;
        }

        if (user.name === "") {
            res.writeHead(400);
            res.end(JSON.stringify({message: 'Bad request'}));
            return;
        }

        if (await Users.update(userId, user)) {
            res.end(JSON.stringify({message: 'User updated'}));
        } else {
            res.writeHead(404);
            res.end(JSON.stringify({message: 'User not found'}));
        }
    });
}