import express from 'express'
import { existsSync } from 'fs'
import path from 'path'
import sharp from 'sharp'
const imgProc = express.Router()

imgProc.get('/', (req, res) => {
  const params = req.query
  const img = params.image
  const w = parseInt(params.w as string)
  const h = parseInt(params.h as string)
  //validate image
  if (img == undefined) {
    return res.status(400).send('Please provide Image for processing!!')
  }
  const imgPath = path.join(path.resolve('./'), `statics/images/${img}.jpg`)
  const outputImg = path.join(
    path.resolve('./'),
    `statics/images/thumbs/${img}_${w}_${h}.jpg`
  )
  //check if image exist
  if (!existsSync(imgPath)) {
    return res.send('Please provide valid image!')
  }
  //vlidate width and height
  if (isNaN(w) || isNaN(h)) {
    return res.send('please provide valid parameters!!')
  }
  //check if image was cashed
  if (existsSync(outputImg)) {
    return res.sendFile(outputImg)
  }

  sharp(imgPath)
    .resize(w, h)
    .toFile(outputImg, err => {
      if (err) {
        return res.send(err)
      } else {
        return res.sendFile(outputImg)
      }
    })
  console.log(imgPath)
})

export default imgProc
