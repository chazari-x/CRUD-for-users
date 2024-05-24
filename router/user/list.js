const Users = require('../../user/sql');

// Handle GET request for /users
// Returns a list of all users
module.exports = async (req, res) => {
    res.end(JSON.stringify(await Users.getAll()));
}