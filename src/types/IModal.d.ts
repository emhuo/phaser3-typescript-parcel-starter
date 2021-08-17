export interface IModal
{
  addContent(content: GuiContent): this
  setTextures(backdropKey: string, panelKey: string): this
  setPositions(hiddenX: number, hiddenY: number, openX: number, openY: number): this
  toggleModal(): void
}
