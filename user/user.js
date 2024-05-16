let Users = []
let id = 0

module.exports = {
    get: (id) => {
        return Users.find(user => user.id === +id)
    },
    getAll: () => {
        return Users
    },
    create: (user) => {
        user.id = ++id
        Users.push(user)
        return user.id
    },
    update: (id, user) => {
        const index = Users.findIndex(user => user.id === +id)
        if (index === -1) {
            return false
        }
        for (let key in user) {
            Users[index][key] = user[key]
        }
        Users[index].id = +id
        return true
    },
    delete: (id) => {
        if (Users.findIndex(user => user.id === +id) === -1) {
            return false
        }
        Users = Users.filter(user => user.id !== +id)
        return true
    }
}