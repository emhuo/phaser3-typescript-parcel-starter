import Phaser from 'phaser'

import SceneKeys from '~/constants/SceneKeys'
import TextureKeys from '~/constants/TextureKeys'
import FontKeys from '~/constants/FontKeys'

import Viewport from '~/constants/DisplayKeys'

export default class TitleScene extends Phaser.Scene
{
	constructor()
	{
		super(SceneKeys.TITLE_SCENE)
	}

  init()
  {

  }

  preload()
  {

  }

	create()
	{
		this.add.bitmapText(
			Viewport.CENTER.x,
			Viewport.CENTER.y,
			FontKeys.MOON_PAINT,
			'Title Scene Test'
		).setOrigin(0.5)
	}
}
