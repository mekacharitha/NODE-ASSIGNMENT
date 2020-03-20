const models = require('../../models');

const signUp = async (req, res, next) => {
    try {
        const user = await models.User.create(req.body)
        res.status(201).json({
            success: true,
            user
        })
    }
    catch (error) {
        res.status(404).json({
            success: false,
            message: "could not signup",
            error
        })
    }
}

module.exports = signUp;
