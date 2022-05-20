import express, { Request, Response } from 'express'
import imgProc from './api/imgProc'
const routes = express.Router()

routes.get('/', (_req: Request, res: Response): void => {
  res.send(`Welcome to imgProc 
    an api for resizing images.
    query parameters to use:
    -img
    -w
    -h
    *Example:-    localhost/3000/api/ingProc?img=fjord&w=200&h=200`)
})

routes.use('/imgProc', imgProc)

export default routes
