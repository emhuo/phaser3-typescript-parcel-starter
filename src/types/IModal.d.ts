export interface IModal
{
  addContentToModal(content: GuiContent): this
  setPanelTexture(backdropKey: string, panelKey: string): this
  setPositions(hiddenX: number, hiddenY: number, openX: number, openY: number): this
  toggleModal(): void
}
