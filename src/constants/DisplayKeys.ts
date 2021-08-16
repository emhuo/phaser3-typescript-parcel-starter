const ASPECT_RATIO = { w: 4, h: 3 }
const width = ASPECT_RATIO.w * 80
const height = ASPECT_RATIO.h * 80

const globalScale = 2

const centerPos = {
  x: width / 2,
  y: height / 2
}

const Viewport = {
  SCALE: globalScale,
  WIDTH: width,
  HEIGHT: height,
  CENTER: centerPos
}

export default Viewport
