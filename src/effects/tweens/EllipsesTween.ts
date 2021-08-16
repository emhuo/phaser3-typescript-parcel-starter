import Phaser from 'phaser'
import Viewport from '~/constants/DisplayKeys'

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

const createDotsTween = (scene: Phaser.Scene, dots: Phaser.GameObjects.Arc[] = []) => {
  const tweenTimeline = scene.tweens.timeline({ loop: -1 })

  let offset = 0
  for (let i = 0; i < dots.length; ++i)
  {
    const dot = dots[i]
    dot.setAlpha(0)
    tweenTimeline.add({
      targets: dot,
      alpha: 1,
      duration: TweenTime.TOTAL,
      ease: Phaser.Math.Easing.Sine.In,
      offset
    })
    offset += TweenTime.OFFSET
  }

  tweenTimeline.add({
    targets: dots,
    alpha: 0,
    duration: TweenTime.FADE
  })
  return tweenTimeline
}

const getEllipsesOffset = (dotSize: number) => {
  const ellipsesLength = dotSize * 5
  const offset = ellipsesLength / 3
  return offset
}

export const addLoadEllipses = (scene: Phaser.Scene, x = Viewport.CENTER.x, y = Viewport.CENTER.y, dotSize = 8, dotColor = 0xFFFFFF) => {
  const dots = createDots(scene, dotSize, dotColor)
  const dotsTween = createDotsTween(scene, dots)
  dotsTween.play()
  const offsetX = getEllipsesOffset(dotSize)
  scene.add.container(x - offsetX, y, dots)
}
