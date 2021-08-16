import Phaser from 'phaser'

import SceneKeys from '~/constants/SceneKeys'
import TextureKeys from '~/constants/TextureKeys'
import FontKeys from '~/constants/FontKeys'

import { addRepeatingColumns } from '../../utils/GraphicUtils'

export default class DemoScene extends Phaser.Scene
{
	constructor()
	{
		super(SceneKeys.DEMO_SCENE)
	}

  init()
  {

  }

  preload()
  {

  }

	create()
	{
		addRepeatingColumns(this)
	}
}
