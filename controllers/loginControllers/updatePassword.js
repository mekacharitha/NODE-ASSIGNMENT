const models = require('../../models')
var jwt = require('jsonwebtoken')

const updatePassword = async (req, res, next) => {
    try {
        const token = req.headers['access-token']
        const payload = jwt.decode(token)
        const user = await models.User.findOne({
            where: {
                name: payload.name,
            }
        })

        if (user) {
            user.comparePassword(req.body.oldPassword, (err, isMatch) => {
                if (isMatch && !err) {
                    user.update({ password: req.body.newPassword })
                    res.status(200).json({
                        message: "password changed successfully",
                    })
                } else {
                    res.status(404).send({ 
                        success: false, 
                        msg: 'Authentication failed. Wrong old password.' });
                }
            })

        }
        else {
            //user.update({ password: req.body.newPassword })
            res.status(400).json({
                message: "user does not exists"
            })
        }
    }
    catch (error) {
        res.status(400).json({
            status: false,
            error
        })
    }
}
module.exports = updatePassword;








