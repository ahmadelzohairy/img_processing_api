import sharp from 'sharp'

const resize = function(
  img: string,
  out: string,
  width: number,
  height: number
) {
  sharp(img)
    .resize(width, height)
    .toFile(out)
}
export default resize
