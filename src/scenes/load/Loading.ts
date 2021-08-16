import Phaser from 'phaser'

import GradientKeys from '~/constants/colors/GradientKeys'
import SceneKeys from '~/constants/SceneKeys'
import Viewport from '~/constants/DisplayKeys'

import Tweens from '../../effects/tweens'

export default class Loading extends Phaser.Scene
{
	constructor()
	{
		super(SceneKeys.LOADING)
	}

	create()
	{
    this.add.graphics()
      .fillGradientStyle(
        GradientKeys.GLASS_OVERLAY.topLeft,
        GradientKeys.GLASS_OVERLAY.topLeft,
        GradientKeys.GLASS_OVERLAY.topLeft,
        GradientKeys.GLASS_OVERLAY.topLeft
      ).fillRect(0, 0, Viewport.WIDTH, Viewport.HEIGHT).setAlpha(0.75)

    Tweens.addLoadEllipses(this)

	}
}
