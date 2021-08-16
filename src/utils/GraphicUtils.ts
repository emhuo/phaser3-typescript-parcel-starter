import Viewport from '../constants/DisplayKeys'

const SKY_COLOR = 0x5C6FCC

const makeDitherRow = (scene: Phaser.Scene, startY: number, rowHeight: number, rowColor: number) => {
  const squareSize = Viewport.SCALE
  const solidRow = scene.add.rectangle(0, startY + rowHeight * 0.5, Viewport.WIDTH * 2, rowHeight, rowColor)
  const ditherRow = scene.add.grid(0, startY, Viewport.WIDTH * 2, rowHeight, squareSize, squareSize, rowColor, 0)
    .setOutlineStyle().setAltFillStyle(rowColor)
  return { solidRow, ditherRow }
}

export const addDitherGradient = (scene: Phaser.Scene, startColor = SKY_COLOR, brightenFactor = 4, numRows = 8) => {
  const colorObj = Phaser.Display.Color.IntegerToColor(startColor)
  const rowHeight = Viewport.HEIGHT / numRows
  const stripeContainer = scene.add.container(0, 0)

  for (let i = 0; i < numRows + 1; i++)
  {
    const ditherGroup = makeDitherRow(scene, rowHeight * i, rowHeight, colorObj.color)
    colorObj.brighten(brightenFactor)
    stripeContainer.add([ditherGroup.ditherRow, ditherGroup.solidRow])
  }
  return stripeContainer
}
