import onError from "../error_handlers/response_error_handlers.js";
import User from "../models/user_models/users.js"
const createAccount = (req, res, next) => {


    try {

        console.log(req.body)
        if (!req.body) res.status(400).send({
            code: 400,
            message: "something went wrong/body is required",
            status: "Bad Request"
        })

        next()

    } catch (e) {
        onError.response(res, e.message, 403, true);
    }


}
const userAuthVerify = async (req) => {


    try {

      if (!req.body.userId) {
            return false;
        }
        else {

            let user = await User.findOne({
                id: req.body.userId,
            });

            if (user == null) {
                return false;
            }
            else {
                return true;
            }
          return false;

        }
        return false;

    } catch (e) {
        onError.response(res, e.message, 403, true);
    }

}
export default {createAccount,userAuthVerify};