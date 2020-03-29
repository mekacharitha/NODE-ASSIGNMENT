const models = require('../../models');
const jwt = require('jsonwebtoken');

const addActivity = async (req, res, next) => {
    try {
        // const token = req.headers['access-token']
        // const payload = jwt.decode(token)
        // const user = await models.User.findOne({
        //     where: {
        //         name: payload.name
        //     }
        // })
        // const activity = { ...req.body, userId: user.id }
        console.log(req.body)
        const act = await models.Activity.create(req.body)
        res.status(200).json({
            act
        })
    }
    catch (error) {
        res.status(400).json({
            status: false,
            error
        })
    }
}
module.exports = addActivity;