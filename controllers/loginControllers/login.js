const models = require('../../models');
const jwt = require('jsonwebtoken');

const login = async (req, res, next) => {

    const user = await models.User.findOne({
        where: {
            name: req.body.name,
        }
    })
    if (!user) {
        return res.status(401).json({
            message: 'Authentication failed. User not found.',
        });
    }

    user.comparePassword(req.body.password, (err, isMatch) => {
        if (isMatch && !err) {
            var token = jwt.sign({ name: req.body.name , userId:user.id}, 'nodeauthsecret');
            res.status(200).json({
                 success: true, 
                 token: token,
                  user: user });
        } else {
            res.status(400).send({
                 success: false,
                  msg: 'Authentication failed. Wrong password.' });
        }
    })
}

module.exports = login;

