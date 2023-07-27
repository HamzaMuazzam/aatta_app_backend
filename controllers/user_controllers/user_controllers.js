import User from "../../models/user_models/users.js";
import {Sequelize} from "sequelize";
import send from "../../error_handlers/response_error_handlers.js"
import token from "../../middlewares/jwt_tokken.js";


const createAccount = async (req, res) => {

    try {
        let user = await User.findOne({
            attributes: {exclude: ['password']}, where: Sequelize.and({loginId: req.body.nic})
        });
        if (user !== null) {
            send.response(res, "User already created.", 400, true)
            return;
        }

        const result = await User.create({
            name: req.body.name,
            mobileNumber: req.body.mobileNumber,
            address: req.body.address,
            nic: req.body.nic,
            isAdmin: false,
            userType: req.body.userType,
        });


        if (result != null) {
            send.response(res, "User Created", 200, false)
        } else {
            send.response(res, "error occurred", 400, true)
        }


    } catch (e) {
        send.response(res, e.message, 400, true);
    }

}
const loginUser = async (req, res) => {

    try {

        console.log(req.body);
        let user = await User.findOne({
            attributes: {exclude: ['password']}, where: Sequelize.and({
                loginId: req.body.loginId,
            }, {
                thumbId: req.body.thumbId
            }, {
                password: req.body.password
            },)
        });

        if (user == null) {
            send.response(res, "User Not Found", 403, true);
        } else {

            res.send({
                error: false, message: "user Found", token: await token.createToken(user), data: user
            })
        }


    } catch (e) {

        send.response(res, e.message, 400, true);

    }

}
const createAdminUser = async (req, res) => {

    try {

        console.log(req.body);
        let user = await User.findOne({
            attributes: {exclude: ['password']}, where: {
                loginId: req.body.loginId,
            }
        });

        if (user != null) {
            send.response(res, "User Already Exist", 403, true);
        } else {
            let user = await User.create({
                loginId: req.body.loginId, thumbId: req.body.thumbId, password: req.body.password
            });
            res.send({
                error: false, message: "user Found", token: await token.createToken(user), data: user
            })
        }


    } catch (e) {

        send.response(res, e.message, 400, true);

    }

}

const getAllUsers = async (req, res) => {

    try {

        let user = await User.findAll({
            where: {
                userType: req.body.userType
            }
        });
        send.response(res, "Success", 200, false, user);

    } catch (e) {

        send.response(res, e.message, 400, true);

    }

}

const getUserById = async (req, res) => {
    try {
        let model = await User.findByPk(req.body.userId);
        send.response(res, "Success", 200, false, model);
    } catch (e) {
        send.response(res, e.message, 403, true)
    }
}

export default {
    createAccount, loginUser, getUserById, getAllUsers, createAdminUser,
}