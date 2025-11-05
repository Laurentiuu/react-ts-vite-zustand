/**
 * Validates and sanitizes the input value.
 *
 * @param {any} x - The input value to be validated.
 * @returns {string} The validated and sanitized string or '--' if the input is null, undefined, or empty.
 */
export function validate(x: any): string {
  const noSpaces: string = typeof x === 'string' ? x.trim() : x.toString()

  if (noSpaces == null || noSpaces === undefined || noSpaces === '') {
    return '--'
  }

  return noSpaces
}

/**
 * Converts a camelCase string into a human-readable word string by adding spaces.
 *
 * @param {string | undefined | null} camelCaseString - The camelCase string to be converted.
 * @returns {string} The human-readable word string or '--' if the input is empty or invalid.
 */
export function camelCaseToWordString(camelCaseString: string | undefined | null): string {
  if (!camelCaseString || camelCaseString == null) {
    return '--'
  }
  const result = camelCaseString.replace(/([A-Z]|\d{1,})/g, ' $1')
  return result
}

/**
 * Formats a boolean value as `TRUE` or `FALSE`.
 *
 * @param {boolean | undefined | null} bool - The boolean value to be formatted.
 * @returns {string} The formatted string ('TRUE', 'FALSE') or '--' if the input is undefined or null.
 */
export function formatBool(bool?: boolean | null): string {
  if (bool === true) return 'TRUE'
  if (bool === false) return 'FALSE'
  return '--'
}

/**
 * Formats an amount as a currency string in USD (United States Dollar) format.
 *
 * @param {string | number | undefined | null} amount - The amount to be formatted as currency.
 * @returns {string} The formatted currency string or '--' for undefined, null, or 0 amounts.
 */
export function formatAmount(amount: string | number | undefined | null): string {
  if (amount === undefined || amount === null || amount === 0 || amount === '0') {
    return '--'
  }

  const numericAmount = typeof amount === 'string' ? parseFloat(amount) : amount

  return numericAmount.toLocaleString('en-US', {
    style: 'currency',
    currency: 'USD',
  })
}

/**
 * Represents the result of formatting a date to ISO format.
 */
type DateISO = {
  day: string
  hour: string
}

/**
 * Formats a date as an ISO string, returning the day and hour parts.
 *
 * @param {number | string} date - The date to be formatted.
 * @returns {DateISO} An object containing the day and hour parts of the formatted date.
 */
export function formatDateToISO(date: number | string): DateISO {
  const d = new Date((date as number) * 1000).toISOString()
  const splitDate = d.split('T')
  return {
    day: splitDate[0],
    hour: splitDate[1].split('.')[0],
  }
}

/**
 * Formats a number as a USD (United States Dollar) currency string with cents divided by 100.
 *
 * @param {string | number} cents - The number to be formatted as USD currency.
 * @returns {string} The formatted USD currency string.
 */
export function formatToUSD(cents: string | number): string {
  const formatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
  })

  const formattedString = formatter.format((cents as number) / 100)
  return formattedString
}

/**
 * Formats a number as a USD (United States Dollar) currency string.
 *
 * @param {string | number} data - The number to be formatted as USD currency.
 * @returns {string} The formatted USD currency string.
 */
export function formatUSD(data: string | number): string {
  const formatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
  })

  const formattedString = formatter.format(data as number)
  return formattedString
}

/**
 * Formats a number with a minimum of 2 decimal places and using the visitor's browser locale or a specified one.
 *
 * @param {string | number} data - The number to be formatted.
 * @returns {string} The formatted number string.
 */
export function formatNumber(data: string | number): string {
  const formattedString = (data as number).toLocaleString(undefined, {
    minimumFractionDigits: 2,
  })
  return formattedString
}
