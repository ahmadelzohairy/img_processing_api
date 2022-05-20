import express, { Request, Response } from 'express'
import path from 'path'
const imgProc = express.Router()
import fsExists from 'fs.promises.exists'
// import { existsSync } from 'fs';
import resize from '../../utilities/utilities'

imgProc.get(
  '/',
  async (_req: Request, res: Response): Promise<void | Response> => {
    const params = _req.query
    const img = params.image
    const w = parseInt(params.w as string)
    const h = parseInt(params.h as string)
    //validate image provided
    if (img == undefined) {
      return res.status(400).send('Please provide Image for processing!!')
    }
    const imgPath = path.join(path.resolve('./'), `statics/images/${img}.jpg`)
    const outputImg = path.join(
      path.resolve('./'),
      `statics/images/thumbs/${img}_${w}_${h}.jpg`
    )
    //check if image exist
    if (!(await fsExists(imgPath))) {
      return res.send('Please provide valid image!')
    }
    //vlidate width and height
    if (isNaN(w) || isNaN(h)) {
      return res.send('please provide valid parameters!!')
    }
    //check if image was cashed
    if (await fsExists(outputImg)) {
      return res.sendFile(outputImg)
    }

    //apply resizing
    await resize(imgPath, outputImg, w, h)

    res.sendFile(outputImg)
  }
)

export default imgProc
