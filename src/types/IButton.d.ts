export interface IButton
{
  subscribe(listener: ObserverCallback): void
  unsubscribe(listener: ObserverCallback): void
  enableButton(shouldEnable: boolean): this
  displayButton(shouldDisplay: boolean): this
  destroyButton(): void
  setIcon(key: string, frame: string | number, xPos: number, yPos: number): this
  setText(fontKey: string, text: string, xPos: number, yPos: number): this
  setContentDownY(downY: number): this
  setDisplayDelay(delayTime: number): this
}
