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
        if (user.id !== undefined) {
            return -1
        }

        user.id = ++id
        Users.push(user)
        return user.id
    },
    update: (id, user) => {
        if (user.id !== undefined) {
            return false
        }

        const index = Users.findIndex(user => user.id === +id)
        if (index === -1) {
            return false
        }

        for (let key in user) {
            if (user[key]) {
                Users[index][key] = user[key]
            } else {
                Users[index][key] = undefined
            }
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