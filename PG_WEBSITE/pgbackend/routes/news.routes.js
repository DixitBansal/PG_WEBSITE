import { Router } from "express";
import { verifyJWTtoken, authorizeAdmin } from "../middleware/user.middleware.js";
import { HandleErrors } from "../middleware/asynerrorhandler.js";
import multer from "multer"
import { registerController, updateController, deleteController, getController, getByIdController } from "../controller/newsController.js"

export const newsRouter = Router()
const upload = multer({ dest: 'upload/' })

newsRouter.route("/post").post(upload.single('news-img'), HandleErrors(verifyJWTtoken), HandleErrors(authorizeAdmin), HandleErrors(registerController))
newsRouter.route("/update").put(upload.single('news-img'), HandleErrors(verifyJWTtoken), HandleErrors(authorizeAdmin), HandleErrors(updateController))
newsRouter.route("/delete").delete(HandleErrors(verifyJWTtoken), HandleErrors(authorizeAdmin), HandleErrors(deleteController))
newsRouter.route("/get/:page/:limit").get(HandleErrors(getController))
newsRouter.route("/get/:id").get(HandleErrors(getByIdController))
