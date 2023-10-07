import { Router } from "express";
import { HandleErrors } from "../middleware/asynerrorhandler.js";
import { userExistMiddleware, verifyJWTtoken } from "../middleware/user.middleware.js"
import { userLoginController, userRegisterController, userProfileController, userLogoutController } from "../controller/userController.js"

export const userRouter = Router()

userRouter.route("/login").post(HandleErrors(userLoginController))
userRouter.route("/register").post(userExistMiddleware, HandleErrors(userRegisterController))
userRouter.route("/profile").get(HandleErrors(verifyJWTtoken), HandleErrors(userProfileController))
userRouter.route("/logout").delete(HandleErrors(userLogoutController))
