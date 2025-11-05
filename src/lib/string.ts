/**
 * Capitalizes the first letter of a given string.
 *
 * @param {string} str - The input string to capitalize.
 * @returns {string} The input string with the first letter capitalized.
 */
export function uppercaseFirstLetter(str: string): string {
  if (str.length === 0) return str

  const firstLetter = str.charAt(0).toUpperCase()
  const restOfTheString = str.slice(1)

  return firstLetter + restOfTheString
}
/***
 * This function cast your number string into this format:
 * (xxx) xxx-xxx
 */
export const formatPhoneNumber = (input?: string) => {
  if (!input) return ''

  // remove all non digit characters from the string
  let phoneNumberDigits = input.replace(/\D/g, '')
  phoneNumberDigits = phoneNumberDigits.substring(1, phoneNumberDigits.length)

  const areaCode = phoneNumberDigits.substring(0, 3)
  const firstPart = phoneNumberDigits.substring(3, 6)
  const secondPart = phoneNumberDigits.substring(6, 11)

  /*   if (numberOfDigits > 6) return `(${areaCode}) ${firstPart}-${secondPart}`
  if (numberOfDigits > 3) return `(${areaCode}) ${firstPart}` */
  return `(${areaCode}) ${firstPart}-${secondPart}`
}

export const generateColourByString = (name: string) => {
  const presetColors = ['#338DD0', '#27E2AA', '#855EF2', '#ED9A39', '#3FC3E0']

  let sum = 0
  for (let i = 0; i < name.length; i++) {
    sum += name.charCodeAt(i)
  }
  return presetColors[sum % presetColors.length]
}

export const unmaskValue = (maskedValue: string) => {
  return maskedValue?.replace(/[^0-9+]/g, '')
}
