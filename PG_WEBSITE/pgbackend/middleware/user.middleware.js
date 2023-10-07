import { usermodel } from "../db/models/user.model.js";
import jwt from "jsonwebtoken"

export async function userExistMiddleware(req, res, next) {
    const usercount = await usermodel.countDocuments({ email: req.body.email })
    if (usercount !== 0)
        return res.json("User already exist")
    next()
}

export async function verifyJWTtoken(req, res, next) {
    const PRIVATE_KEY = process.env.PRIVATE_KEY
    let userdata = null
    if(req.cookies.token !== undefined)
        userdata = jwt.verify(req.cookies.token, PRIVATE_KEY)
    req.userdata = userdata
    next()
}

export async function authorizeAdmin(req, res, next){
    if(req.userdata !== null && req.userdata.permissions === 'admin')
        next()
    else 
        return res.status(403).json({msg : "error", data : "unauthorized"})
}