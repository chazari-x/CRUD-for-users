const Users = require('../../user/sql');

// Handle GET request for /users/:id
// Returns a user by id
module.exports = async (req, res, userId) => {
    if (userId === undefined || userId === null) {
        res.writeHead(400);
        res.end(JSON.stringify({message: 'User ID is required'}));
        return;
    }

    const user = await Users.get(userId);
    if (user) {
        res.end(JSON.stringify(user));
    } else {
        res.writeHead(404);
        res.end(JSON.stringify({message: 'User not found'}));
    }
};
