/**
 * Defines a value and it's setter.
 */
export type Ctrl<T> = [T | undefined, (value: T) => void]

/**
 * Defines a result and it's error.
 */
export type Rez<R, E> = [R | null, E | null]
