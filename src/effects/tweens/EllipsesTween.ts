import Phaser from 'phaser'
import Viewport from '~/constants/DisplayKeys'

interface ITweenConfig
{
	totalDuration?: number,
	fadeOffsetTime?: number,
	fadeOutDuration?: number
}

enum TweenTime
{
  TOTAL = 400,
  OFFSET = 300,
  FADE = 100,
}

const createDots = (scene: Phaser.Scene, dotSize: number, dotColor: number) => {
  let dots = [] as Phaser.GameObjects.Arc[]
  const dotsRadius = dotSize / 2
  const dotsGap = dotSize * 2

  for (let i = 0; i < 3; ++i)
  {
    const dot = scene.add.circle(i * dotsGap, 0, dotsRadius, dotColor, 1)
    dots.push(dot)
  }
  return dots
}

const createDotsTween = (scene: Phaser.Scene, dots: Phaser.GameObjects.Arc[] = [], config: ITweenConfig = {}) => {
  const tweenTimeline = scene.tweens.timeline({ loop: -1 })

  const {
    totalDuration = TweenTime.TOTAL,
    fadeOffsetTime = TweenTime.OFFSET,
    fadeOutDuration = TweenTime.FADE
  } = config

  let offset = 0
  for (let i = 0; i < dots.length; ++i)
  {
    const dot = dots[i]
    dot.setAlpha(0)
    tweenTimeline.add({
      targets: dot,
      alpha: 1,
      duration: totalDuration,
      ease: Phaser.Math.Easing.Sine.In,
      offset
    })
    offset += fadeOffsetTime
  }

  tweenTimeline.add({
    targets: dots,
    alpha: 0,
    duration: fadeOutDuration
  })
  return tweenTimeline
}

const getEllipsesOffset = (dotSize: number) => {
  const ellipsesLength = dotSize * 5
  const offset = ellipsesLength / 3
  return offset
}

const loadEllipses = (scene: Phaser.Scene, x = Viewport.CENTER.x, y = Viewport.CENTER.y, dotSize = 8, dotColor = 0xFFFFFF) => {
  const dots = createDots(scene, dotSize, dotColor)
  const dotsTween = createDotsTween(scene, dots)
  dotsTween.play()
  const offsetX = getEllipsesOffset(dotSize)
  scene.add.container(x - offsetX, y, dots)
}

const playEllipsesTween = (scene: Phaser.Scene, x = Viewport.CENTER.x, y = Viewport.CENTER.y, dotSize = 8, dotColor = 0xFFFFFF) => {
  const dots = createDots(scene, dotSize, dotColor)
  const dotsTween = createDotsTween(scene, dots)
  dotsTween.play()
  const offsetX = getEllipsesOffset(dotSize)
  scene.add.container(x - offsetX, y, dots)
}


/********

play(config: IAnimationConfig = {})
{
  if (!this.graphics) {
    this.make()
  }

  const {
    dotFadeDuration = 400,
    dotFadeOffset = 200,
    dotsFadeOutDuration = 100
  } = config

  this.timeline = this.scene.tweens.timeline({ loop: -1 })

  let offset = 0

  for (let i = 0; i < this.dots.length; ++i)
  {
    const dot = this.dots[i]
    dot.setAlpha(0)

    this.timeline.add({
      targets: dot,
      alpha: 1,
      duration: dotFadeDuration,
      ease: Phaser.Math.Easing.Sine.In,
      offset
    })

    offset += dotFadeOffset
  }

  this.timeline.add({
    targets: this.dots,
    alpha: 0,
    duration: dotsFadeOutDuration
  })

  this.timeline.play()

  return this
}

*******/

export {
  loadEllipses,
  playEllipsesTween
}
