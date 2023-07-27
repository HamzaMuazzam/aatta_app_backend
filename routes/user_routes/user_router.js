import express from "express";
import user_middleware from "../../middlewares/user_middleware.js";
import files from "../../file_handling/file_handling.js"
import user_controllers from "../../controllers/user_controllers/user_controllers.js";
// import globalJWTMiddleWare from "../../middlewares/global_middleware.js";

const routers = express.Router();

routers.all('/createAccount',  user_middleware.createAccount, user_controllers.createAccount);
routers.all('/loginUser', files().any(), user_controllers.loginUser);

routers.all('/getUserById', files().any(),
    user_controllers.getUserById);


routers.all('/getAllUsers',
    files().any(),
    user_controllers.getAllUsers);


export default routers;

