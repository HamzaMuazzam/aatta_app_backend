import express from "express";
import user_middleware from "../../middlewares/user_middleware.js";
import files from "../../file_handling/file_handling.js"
import user_controllers from "../../controllers/user_controllers/user_controllers.js";
import user_verification_controller from "../../controllers/user_controllers/user_verification_controller.js";
import globalJWTMiddleWare from "../../middlewares/global_middleware.js";

const routers = express.Router();

routers.all('/createAccount', files().single("profileImage"), user_middleware.createAccount, user_controllers.createAccount);
routers.all('/loginUser', files().any(), user_controllers.loginUser);
routers.all('/sendEmailOTP', files().any(), user_controllers.sendEmailOTP);
routers.all('/updateForgotPassword', files().any(), user_controllers.updateForgotPassword);
routers.all('/changePassword', files().any(), user_controllers.changePassword);

routers.all('/suspendUser', files().any(), globalJWTMiddleWare,
    user_controllers.suspend_unsuspendUser);
routers.all('/block_unblockUser', files().any(), globalJWTMiddleWare,
    user_controllers.block_unblockUser);
routers.all('/getUserById', files().any(), globalJWTMiddleWare,
    user_controllers.getUserById);
routers.all('/updateUserProfile', files().single("profileImage"), globalJWTMiddleWare,
    user_controllers.updateUserProfile);

routers.all('/getAllUsers',
    files().any(),
    globalJWTMiddleWare,
    user_controllers.getAllUsers);




routers.all('/activeInActiveUser',
    files().any(),
    globalJWTMiddleWare,
    user_controllers.activeInActiveUser);





routers.all('/uploadDocuments',
    files().any(),
    globalJWTMiddleWare,
    user_middleware.userDocumentVerification,
    user_verification_controller.uploadUserDocument);


routers.all('/updateDocumentById',
    files().any(),
    globalJWTMiddleWare,
    user_verification_controller.updateDocumentById);


routers.all('/getDocumentsByStatus',
    files().any(),
    globalJWTMiddleWare,
    user_verification_controller.getDocumentsByStatus);


routers.all('/getUserDocumentById',
    files().any(),
    globalJWTMiddleWare,
    user_verification_controller.getUserDocumentById)



routers.all('/getUserDocuments',
    files().any(),
    globalJWTMiddleWare,
    user_verification_controller.getUserDocuments);

routers.all('/verifyUserDocument',
    files().any(),
    globalJWTMiddleWare,
    user_verification_controller.verifyUserDocument);

routers.all('/rejectUserDocument',
    files().any(),
    globalJWTMiddleWare,
    user_verification_controller.rejectUserDocument);

routers.all('/changeDriverStatus',
    files().any(),
    globalJWTMiddleWare,
    user_verification_controller.changeDriverStatus);

routers.all('/payDriverCommission',
    files().any(),
    globalJWTMiddleWare,
    user_verification_controller.payDriverCommission);


export default routers;

