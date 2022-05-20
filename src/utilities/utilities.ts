import sharp from 'sharp'

const resize = async function(
  img: string,
  out: string,
  width: number,
  height: number
): Promise<void> {
  await sharp(img)
    .resize(width, height)
    .toFile(out)
}
export default resize
