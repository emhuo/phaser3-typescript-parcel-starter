import { ElementKeys } from '~/constants/ConfigKeys'

const addCanvasBackground = (imageUrl: string) => {
  var div = document.getElementById(ElementKeys.CANVAS_WRAPPER)
  const style = `url(${imageUrl})`
  if (!div) { return }
  div.style.background = style
}

export {
  addCanvasBackground
}
