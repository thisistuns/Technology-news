const { createUsersServices } = require('../services/users.Services')

module.exports = {
    postCreateUsers: async (req, res) => {
        let result = await createUsersServices(req.body)
        return res.status(200).json({
            EC: 0,
            data: result,
        })
    },
}
