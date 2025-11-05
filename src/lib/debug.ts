/**
 * Utility for conditional debugging with log, warning, and error functions.
 * @module debug
 */

/**
 * Whether debugging is enabled or not.
 * @type {boolean}
 */
const isDebug = true

/**
 * Debugging functions for logging messages.
 *
 */
export const debug = {
  log: (message?: any, ...optionalParams: any[]): void => {
    if (isDebug) console.log(message, optionalParams)
  },

  warn: (message?: any, ...optionalParams: any[]): void => {
    if (isDebug) console.warn(message, optionalParams)
  },

  error: (message?: any, ...optionalParams: any[]): void => {
    if (isDebug) console.error(message, optionalParams)
  },
}
