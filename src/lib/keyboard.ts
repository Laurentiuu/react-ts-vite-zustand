/**
 * Executes a callback when the 'Escape' key is pressed and no input or select element is in focus.
 *
 * @param {KeyboardEvent} e - The keyboard event object.
 * @param {() => any} callback - The callback function to execute when the 'Escape' key is pressed.
 */
export function onEscape(e: KeyboardEvent, callback: () => any) {
  // Check if the pressed key is 'Escape'
  if (e.code !== 'Escape') return

  // Get the currently focused element
  const activeElement = document.activeElement

  // Check if the focused element is an input or select element
  const isInputOrSelectFocused = activeElement && ['INPUT', 'SELECT'].includes(activeElement.tagName)

  // If an input or select element is focused, return without executing the callback
  if (isInputOrSelectFocused) return

  return callback()
}
