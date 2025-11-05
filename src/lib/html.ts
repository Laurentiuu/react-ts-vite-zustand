export const clickElement = (elementClassName: string) => {
  const btn = document.getElementsByClassName(elementClassName).item(0) as HTMLElement

  if (!btn) return
  btn.click()
}

export const clickElementById = (elementId: string) => {
  const btn = document.getElementById(elementId) as HTMLElement

  if (!btn) return
  btn.click()
}

export const clickSaveChangesButton = () => {
  try {
    const result = document.getElementsByClassName('leaflet-draw')
    const leafletControls = result.item(0)
    const leafletSection = leafletControls?.children.item(1)
    const ulChild = leafletSection?.children.item(1)
    const ulChildren = ulChild?.children

    const aSave = ulChildren?.item(0)?.children?.item(0) as HTMLElement
    if (!aSave) return

    aSave.click()
  } catch (e) {
    console.warn(e)
  }
}

export const clickCancelDrawButton = () => {
  try {
    const result = document.getElementsByClassName('leaflet-draw')
    const leafletControls = result.item(0)
    const leafletSection = leafletControls?.children.item(0)
    const ulChild = leafletSection?.children.item(1)
    const ulChildren = ulChild?.children

    const aCancel = ulChildren?.item(0)?.children?.item(0) as HTMLElement

    if (!aCancel) return

    aCancel.click()
  } catch (e) {
    console.warn(e)
  }
}

export const clickSaveChangesOnDrawLine = () => {
  try {
    const result = document.getElementsByClassName('leaflet-draw')
    const leafletControls = result.item(0)
    const leafletSection = leafletControls?.children.item(0)
    const ulChild = leafletSection?.children.item(0)
    const ulChildren = ulChild?.children
    console.log(ulChildren)

    const aSave = ulChildren?.item(0)?.children?.item(0) as HTMLElement
    if (!aSave) return

    aSave.click()
  } catch (e) {
    console.warn(e)
  }
}
