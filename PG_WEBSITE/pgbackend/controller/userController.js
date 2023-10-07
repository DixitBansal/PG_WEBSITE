import { userAddService, getUserService } from "../services/user.services.js"
import jwt from "jsonwebtoken"

export async function userLoginController(req, res, next) {
    const user = await getUserService(req.body.email, req.body.password)
    console.log(req.body)
    if (user === null)
        return res.json({ error: "username or password wrong" })

    const PRIVATE_KEY = process.env.PRIVATE_KEY
    res.cookie("token", jwt.sign(JSON.stringify(user), PRIVATE_KEY))
    return res.json(user)
}

export async function userRegisterController(req, res, next) {
    let user = {
        username: req.body.username,
        password: req.body.password,
        contact: req.body.contact,
        email: req.body.email,
        permission: "admin"
    }
    user = await userAddService(user)
    return res.json(user)
}

export async function userProfileController(req, res, next) {
    let user = req.userdata
    if (user === null)
        return res.json({ msg: "fail", data: user })
    return res.json({ msg: "successfull", data: user })
}

export async function userLogoutController(req, res, next) {
    res.clearCookie("token")
    return res.json({ msg: "successfull", data: "logout successfull" })
}