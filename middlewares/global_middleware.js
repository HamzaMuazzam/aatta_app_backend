import token from "./jwt_tokken.js";
import send from "../error_handlers/response_error_handlers.js"
import user_middleware from "./user_middleware.js";

const globalJWTMiddleWare = async (req, res, next) => {
    try {

        console.log("req.originalUrl",req.originalUrl);

        if (req.originalUrl === "/user/createAccount" ||
            req.originalUrl === "/user/loginUser" ||
            req.originalUrl === "/user/sendEmailOTP" ||
            req.originalUrl === "/user/updateForgotPassword"
        ) {

            next();
            return;

        }
        if (req.headers.authorization) {


            let split = req.headers.authorization.toString().split(" ");

            if (!split[1]) {
                send.response(res, "Token Error", 403, true, null)
                return;
            }


            let user = await token.verifyToken(split[1]);


            if (user.payload && user.payload.id) {
                req.body.userId = user.payload.id;

                 let userVerification = await user_middleware.userAuthVerify(req);

                 if(userVerification===true){

                next();
                 }else{
                     console.log("USER DOES NOT EXISTS.")
                     send.response(res, "Token Error", 403, true, user)
                     return;

                 }

            } else {
                send.response(res, "Token Error", 403, true, user)

            }
            // next();

        }
        else if (!req.headers.authorization) {

            send.response(res, "Token Error", 403, true, )
        }


    } catch (e) {
        send.response(res, "Token Error", 403, true, e);
    }
}

export default globalJWTMiddleWare;