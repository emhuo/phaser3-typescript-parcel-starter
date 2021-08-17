export type ButtonContent = Phaser.GameObjects.Image | Phaser.GameObjects.Sprite | Phaser.GameObjects.BitmapText

export type ObserverCallback = () => void

export interface IScrollPattern
{
  setTexture(texture: string, frame?: string | number): this
  setSpeed(speedFactor: number): this
  setScrollFactor(x: number, y: number): this
}
