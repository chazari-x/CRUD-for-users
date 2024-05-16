const getUser = require("./user/get")
const deleteUser = require("./user/delete")
const listUsers = require("./user/list")
const createUser = require("./user/create")
const updateUser = require("./user/update")

module.exports = (req, res) => {
    const method = req.method
    const path = req.url.split('/')

    res.setHeader("content-type", "application/json")

    if (path[1] === "users" && path.length === 2) {
        // /users
        switch (method) {
            case "GET":
                listUsers(req, res);
                return;
            case "POST":
                createUser(req, res);
                return;
        }
    } else if (path[1] === "users" && path.length === 3 && /^\d+$/.test(path[2])) {
        // /users/:id
        switch (method) {
            case "GET":
                getUser(req, res, path[2]);
                return;
            case "DELETE":
                deleteUser(req, res, path[2]);
                return;
            case "POST":
                updateUser(req, res, path[2]);
                return;
        }
    }

    res.writeHead(404);
    res.end(JSON.stringify({ message: 'Not found' }));
}