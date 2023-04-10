import { Response, Request } from "express"
import User from "../Models/user.model"
import { utilities } from "../utils/utilities"

export const user_controllers = {
    register: async (req: Request, res: Response) => {
        User.findAll({
            where: {
                email: req?.body?.email
            }
        }).then(async (data: any) => {
            console.log(data)
            const encodedPassowrd = await utilities?.encodePassword(req?.body?.password)
            const newUser = await User.create({ ...req?.body, password: encodedPassowrd })
            delete newUser['password']
            res.status(201).send({ data: newUser, message: "User Register Successfuly" })

        }).catch((err: any) => {
            console.log(err)
            res.status(201).send({ data: null, message: err?.message })
        })


    },
    login: async (req: Request, res: Response) => {
        User?.findOne({
            where: {
                email: req?.body?.email
            }
        }).then(async (data: any) => {
            const validateUser = await utilities?.validatePassword(req?.body?.password, data?.password)
            if (validateUser) {
                const token = await utilities?.generateToken(data?.email)
                res.send({ message: "You are successfully Login", data: { data: data, token } })
            }
            else {
                res?.send({
                    message: "invalid credentials", data: null
                })
            }

        }).catch((err: any) => {
            res.status(200).send({ message: err?.message, data: null })
        })
        console.log(req?.body)
    },
    updatePhoto: (req: Request, res: Response) => {
        console.log(req?.body)
    },
    socialLogin: (req: Request, res: Response) => {
        console.log(req?.body)
    },
    updateProfile: (req: Request, res: Response) => {

    }
}