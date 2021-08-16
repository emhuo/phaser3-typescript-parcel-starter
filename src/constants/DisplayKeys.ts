const ASPECT_RATIO = { w: 3, h: 2 }
const baseSize = 8
const globalScale = 2

const width = ASPECT_RATIO.w * globalScale * baseSize * 10
const height = ASPECT_RATIO.h * globalScale * baseSize * 10

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
