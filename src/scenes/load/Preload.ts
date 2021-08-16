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
		this.load.bitmapFont(FontKeys.BOLD_PLASTIC, 'BoldPlastic.png', 'BoldPlastic.xml')
		this.load.bitmapFont(FontKeys.MOON_PAINT, 'MoonPaint.png', 'MoonPaint.fnt')
		this.load.bitmapFont(FontKeys.CLEAN_PLATE, 'CleanPlate.png', 'CleanPlate.xml')
		this.load.bitmapFont(FontKeys.PUP_OUTLINE, 'PupOutline.png', 'PupOutline.font')

		this.load.setPath('img/background/')
		this.load.image(TextureKeys.CLOUDS, 'clouds.png')


		this.load.setPath('img/gui/')
		this.load.aseprite(TextureKeys.START_PROMPT, 'start-prompt.png', 'start-prompt.json')

		this.load.setPath('img/icons/')
		this.load.image(TextureKeys.PAW_TILE, 'paw-tile.png')
		this.load.atlas(TextureKeys.SOCIAL_ICONS, 'social-icons.png', 'social-icons.json')
  }

	create()
	{
		addCanvasBackground('img/background/clouds-2x.png')
		CameraControls.FADE_OUT(this, SceneKeys.TITLE_SCENE, SceneKeys.LOADING)
	}
}
