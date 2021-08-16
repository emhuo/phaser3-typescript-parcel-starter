import Phaser from 'phaser'

import SceneKeys from '~/constants/SceneKeys'
import TextureKeys from '~/constants/TextureKeys'
import FontKeys from '~/constants/FontKeys'

import { addCanvasBackground } from '../../utils/PageUtils'
import CameraControls from '../../effects/CameraControls'

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
		this.load.bitmapFont(FontKeys.CLEAN_PLATE, 'CleanPlate.png', 'CleanPlate.xml')

		this.load.setPath('img/background/')
		this.load.image(TextureKeys.CLOUDS, 'clouds.png')
  }

	create()
	{
		addCanvasBackground('img/background/clouds-2x.png')
		CameraControls.FADE_OUT(this, SceneKeys.TITLE_SCENE, SceneKeys.LOADING)
		// this.scene.stop(SceneKeys.LOADING)
		// this.scene.start(SceneKeys.TITLE_SCENE)
	}
}
