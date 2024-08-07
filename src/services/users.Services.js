const User = require('../models/users.Models')

module.exports = {
    createUsersServices: async (data) => {
        if (data.type === 'EMPTY-USER') {
            let result = await User.create(data)
            return result
        }
    },
}
