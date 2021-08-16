import Phaser from 'phaser'

import SceneKeys from '~/constants/SceneKeys'
import TextureKeys from '~/constants/TextureKeys'
import FontKeys from '~/constants/FontKeys'

import Viewport from '~/constants/DisplayKeys'

import { loadEllipses } from '../../effects/tweens/EllipsesTween'

const GLASS = {
  topLeft: 0xB3C0FF,
  topRight: 0xDFE7FF,
  bottomLeft: 0xC8D6FF,
  bottomRight: 0x6C81E9
}

export default class Loading extends Phaser.Scene
{
	constructor()
	{
		super(SceneKeys.LOADING)
	}

	create()
	{
    loadEllipses(this)
    this.add.graphics()
      .fillGradientStyle(GLASS.topLeft, GLASS.topRight, GLASS.bottomLeft, GLASS.bottomRight, 0.5)
      .fillRect(0, 0, Viewport.WIDTH, Viewport.HEIGHT)
	}
}
