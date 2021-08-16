import Phaser from 'phaser'

import SceneKeys from '~/constants/SceneKeys'
import TextureKeys from '~/constants/TextureKeys'
import FontKeys from '~/constants/FontKeys'

import Viewport from '~/constants/DisplayKeys'

import { addDitherGradient } from '~/utils/GraphicUtils'

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
		addDitherGradient(this)

		this.add.bitmapText(
			Viewport.CENTER.x, Viewport.CENTER.y, FontKeys.CLEAN_PLATE,'Title Scene Test').setOrigin(0.5)
	}
}
