const Users = require('../../user/user');

// Handle GET request for /users
// Returns a list of all users
module.exports = (req, res) => {
    res.end(JSON.stringify(Users.getAll()));
}