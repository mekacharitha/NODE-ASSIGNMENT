const models = require('../../models')
var jwt = require('jsonwebtoken')

const getActivities = async (req, res, next) => {
    try {
        const token = req.headers['access-token']
        const payload = jwt.decode(token)
        const user = await models.User.findOne({
            where: {
                name: payload.name
            }
        })
        const data = await models.Activity.findAll({
            where: {
                userId: user.id
            }
        })
        res.status(200).json({
            data
        })
    }
    catch (error) {
        res.status(400).json({
            status: false,
            error
        })
    }
}
module.exports = getActivities;