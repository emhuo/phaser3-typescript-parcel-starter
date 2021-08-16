import Phaser from 'phaser'

import SceneKeys from '~/constants/SceneKeys'
import TextureKeys from '~/constants/TextureKeys'
import FontKeys from '~/constants/FontKeys'

export default class Preload extends Phaser.Scene
{
	constructor()
	{
		super(SceneKeys.PRELOAD)
	}

  init()
  {
		this.scene.run(SceneKeys.LOADING)
  }

  preload()
  {
		this.load.setPath('bitmap-fonts/')
		this.load.bitmapFont(FontKeys.MOON_PAINT, 'MoonPaint.png', 'MoonPaint.fnt')
  }

	create()
	{
		// this.scene.stop(SceneKeys.LOADING)
		// this.scene.start(SceneKeys.TITLE_SCENE)
	}
}
