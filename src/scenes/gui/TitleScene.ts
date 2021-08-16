import Phaser from 'phaser'
import Viewport from '~/constants/DisplayKeys'

import SceneKeys from '~/constants/SceneKeys'
import TextureKeys from '~/constants/TextureKeys'
import FontKeys from '~/constants/FontKeys'

import { addRepeatingColumns } from '~/utils/GraphicUtils'
import CameraControls from '../../effects/CameraControls'

export default class TitleScene extends Phaser.Scene
{
	constructor()
	{
		super(SceneKeys.TITLE_SCENE)
	}

  init()
  {
		this.anims.createFromAseprite(TextureKeys.START_PROMPT)
  }

  preload()
  {

  }

	create()
	{
		addRepeatingColumns(this)

		const titleText = this.add.bitmapText(Viewport.CENTER.x, Viewport.HEIGHT * 0.4, FontKeys.BOLD_PLASTIC, 'Phaser Project Starter')
			.setOrigin(0.5)

		const startPrompt = this.add.sprite(Viewport.CENTER.x, Viewport.HEIGHT * 0.75, TextureKeys.START_PROMPT)
			.play({ key: 'pink-button', frameRate: 6, repeat: -1, repeatDelay: 800 })

		this.input.keyboard.once('keydown-ENTER', () => {
			CameraControls.FADE_OUT(this, SceneKeys.DEMO_SCENE)
		})
	}
}
