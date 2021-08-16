const ASPECT_RATIO = { w: 3, h: 2 }
const BASE_SIZE = 4

const globalScale = 2
const width = ASPECT_RATIO.w * globalScale * BASE_SIZE * 10
const height = ASPECT_RATIO.h * globalScale * BASE_SIZE * 10

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
