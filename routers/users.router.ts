import express, { Request, Response } from 'express';
const userrouters = express.Router()
userrouters.post('/login', (req: Request, res: Response) => {
    res.send({ message: req?.method }).status(201)
})
userrouters.get('/login', (req: Request, res: Response) => {
    res.send({ message: req?.method }).status(201)
})
userrouters.post('/socialLogin', (req: Request, res: Response) => {
    res.send({ message: req?.method }).status(201)
})
userrouters.post('/updateProfile', (req: Request, res: Response) => {
    res.send({ message: req?.method }).status(201)
})
userrouters.post('/updatePhoto', (req: Request, res: Response) => {
    res.send({ message: req?.method }).status(201)
})
userrouters.post('/signup', (req: Request, res: Response) => {
    res.send({ message: req?.method }).status(201)
})

export default userrouters