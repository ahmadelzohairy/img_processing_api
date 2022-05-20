import resize from '../utilities/utilities'
import path from 'path'
import fs from 'fs'

describe('test resize function', () => {
  it('successufally resizing provided image', () => {
    const imgPath = path.join(
      path.resolve('./'),
      `statics/images/encenadaport.jpg`
    )
    const imgOut = path.join(
      path.resolve('./'),
      `statics/images/thumbs/encenadaport.jpg`
    )
    resize(imgPath, imgOut, 200, 200)
    // same problem here as in imgProc endpoint
    setTimeout(() => {
      expect(fs.existsSync(imgOut)).toBeTrue()
    }, 100)
  })
})
