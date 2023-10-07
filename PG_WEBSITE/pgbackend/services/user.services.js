import { usermodel } from "../db/models/user.model.js";

export async function userAddService(userdata) {
    let user = new usermodel(userdata)
    await user.save()
    return user
}

export async function getUserService(email, password) {
    let user = usermodel.findOne({ email: email, password: password })
    user = await user.exec()
    return user
}

