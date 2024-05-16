const Users = require('../../user/user');

// Handle DELETE request for /users/:id
// Deletes a user by id
module.exports = (req, res, userId) => {
    if (userId === undefined || userId === null) {
        res.writeHead(400);
        res.end(JSON.stringify({ message: 'User ID is required' }));
        return;
    }

    if (Users.delete(userId)) {
        res.end(JSON.stringify({ message: 'User deleted' }));
    } else {
        res.writeHead(404);
        res.end(JSON.stringify({ message: 'User not found' }));
    }
}