export abstract class Base {
  id: number
  static latestId = 1

  constructor() {
    this.id = Base._incrementId()
  }

  static _incrementId() {
    return this.latestId++
  }
}

export class ArrUtil {
  static remove_duplicates<T extends Base>(arr: T[]) {
    const seenIds = new Set<number>()

    const no_duplicates = arr.filter((item) => {
      if (seenIds.has(item.id)) return false

      seenIds.add(item.id)
      return true
    })

    return no_duplicates
  }

  /** Returns a ***`new`*** array without the element at the provided index. */
  static removeAtIndex<T>(arr: T[], index: number): T[] {
    const rez = []
    for (let i = 0; i < arr.length; i++) {
      if (i === index) continue
      rez.push(arr[i])
    }
    return rez
  }

  static remove_indices<T>(arr: T[], indices: number[]): T[] {
    const rez = []
    for (let i = 0; i < arr.length; i++) {
      if (indices.includes(i)) continue
      rez.push(arr[i])
    }
    return rez
  }

  /** Returns a `new` array with the element inserted at the provided index. */
  static insertAtIndex<T>(arr: T[], index: number, element: T): T[] {
    const length = arr.length
    const safeIndex = index < 0 ? length + index : index

    if (safeIndex < 0) throw new Error("Index out of bounds")

    if (safeIndex > length) {
      return [...arr, element]
    }

    const before = arr.slice(0, safeIndex)
    const after = arr.slice(safeIndex)

    return [...before, element, ...after]
  }

  /** Returns a `new` array with the element inserted at the provided index. */
  static insertArrAtIndex<T>(arr: T[], index: number, insertion: T[]): T[] {
    const length = arr.length
    const safeIndex = index < 0 ? length + index : index

    if (safeIndex < 0 || safeIndex > length) throw new Error("Index out of bounds")

    const before = arr.slice(0, safeIndex)
    const after = arr.slice(safeIndex)

    return [...before, ...insertion, ...after]
  }

  /** Returns a ***`new`*** array without provided element. */
  static remove<T>(arr: T[], item: T): T[] {
    const index = arr.indexOf(item)
    if (index === -1) return [...arr]
    return arr.toSpliced(index, 1) // 2nd parameter means remove one item only
  }

  /** Returns a ***`new`*** array without provided elements. */
  static remove_arr<T>(arr: T[], itemsToRemove: T[]): T[] {
    return arr.filter((item) => !itemsToRemove.includes(item))
  }

  /** Returns a ***`new`*** array without elements between the provided indices (inclusive). */
  static removeBetween<T>(arr: T[], startIndex: number, endIndex: number): T[] {
    // Ensure startIndex and endIndex are within bounds
    if (startIndex < 0 || endIndex >= arr.length || startIndex > endIndex) {
      throw new Error("Invalid indices")
    }

    return [...arr.slice(0, startIndex), ...arr.slice(endIndex + 1)]
  }

  static iterTwo<T>(arr: T[], lambda: (current: T, next: T) => void) {
    for (let i = 0; i < arr.length; i++) {
      const curr = i
      const next = (i + 1) % arr.length

      lambda(arr[curr], arr[next])
    }
  }

  static min<T>(arr: T[], getter: (item: T) => number): T | null {
    let min = Infinity
    let min_rez = null

    for (let i = 0; i < arr.length; i++) {
      const val = getter(arr[i])

      if (val < min) {
        min = val
        min_rez = arr[i]
      }
    }

    return min_rez
  }

  static max<T>(arr: T[], getter: (item: T) => number): T | null {
    let max = -Infinity
    let min_rez = null

    for (let i = 0; i < arr.length; i++) {
      const val = getter(arr[i])

      if (val > max) {
        max = val
        min_rez = arr[i]
      }
    }

    return min_rez
  }

  static get_safe<T>(array: T[], index: number): T {
    const length = array.length

    if (index < 0) {
      index = length + index
    }

    // Check for out of bounds
    if (index < 0 || index >= length) {
      throw new Error("Index out of bounds")
    }

    return array[index]
  }

  static get_safe_with_wraparound<T>(arr: T[], i: number): T {
    let index = i % arr.length

    if (index < 0) {
      index = arr.length + index
    }

    return arr[index]
  }

  static get_before_current_after<T>(arr: T[], index: number): [T, T, T] {
    const before = ArrUtil.get_safe_with_wraparound(arr, index - 1)
    const current = ArrUtil.get_safe_with_wraparound(arr, index)
    const after = ArrUtil.get_safe_with_wraparound(arr, index + 1)

    return [before, current, after]
  }

  static get_consecutive<T>(arr: T[], index: number): [T, T] {
    const item1 = ArrUtil.get_safe_with_wraparound(arr, index)
    const item2 = ArrUtil.get_safe_with_wraparound(arr, index + 1)

    return [item1, item2]
  }

  static get_consecutive_2<T>(arr: T[], index: number): [T, T] {
    const item1 = ArrUtil.get_safe_with_wraparound(arr, index)
    const item2 = ArrUtil.get_safe_with_wraparound(arr, index + 1)

    return [item1, item2]
  }

  static get_consecutive_3<T>(arr: T[], index: number): [T, T, T] {
    const item1 = ArrUtil.get_safe_with_wraparound(arr, index)
    const item2 = ArrUtil.get_safe_with_wraparound(arr, index + 1)
    const item3 = ArrUtil.get_safe_with_wraparound(arr, index + 2)

    return [item1, item2, item3]
  }

  static get_consecutive_4<T>(arr: T[], index: number): [T, T, T, T] {
    const item1 = ArrUtil.get_safe_with_wraparound(arr, index)
    const item2 = ArrUtil.get_safe_with_wraparound(arr, index + 1)
    const item3 = ArrUtil.get_safe_with_wraparound(arr, index + 2)
    const item4 = ArrUtil.get_safe_with_wraparound(arr, index + 3)

    return [item1, item2, item3, item4]
  }

  static first<T>(arr: T[]): T | undefined {
    return arr[0]
  }

  static last<T>(arr: T[]): T | undefined {
    const index = arr.length - 1
    if (index < 0) return undefined
    return arr[arr.length - 1]
  }

  // Overload signatures
  static avg(arr: number[]): number
  static avg<T>(arr: T[], getter: (item: T) => number): number

  // Implementation
  static avg<T>(arr: any[], getter?: (item: T) => number): number {
    if (arr.length === 0) return 0 // Handle empty array

    // If getter is provided, use it, otherwise assume it's an array of numbers
    const total = arr.reduce((acc, x) => acc + (getter ? getter(x) : x), 0)
    return total / arr.length
  }

  static sort<T>(arr: T[], sector: (item: T) => number, ascending = true) {
    if (ascending) return arr.sort((a, b) => sector(a) - sector(b))

    return arr.sort((a, b) => sector(b) - sector(a))
  }
}

export function isValidArr(arr: any[] | null | undefined): boolean {
  if (arr === null) {
    return false
  }
  if (arr === undefined) {
    return false
  }
  if (arr.length < 1) {
    return false
  }
  return Array.isArray(arr)
}

export function getValidArr<T>(arr: T[] | null | undefined): T[] | null {
  if (arr === null) {
    return null
  }
  if (arr === undefined) {
    return null
  }
  if (!Array.isArray(arr)) {
    return null
  }
  return arr
}

export function getSafe<T>(array: T[], index: number): T {
  const length = array.length

  if (index < 0) {
    index = length + index
  }

  // Check for out of bounds
  if (index < 0 || index >= length) {
    throw new Error("Index out of bounds")
  }

  return array[index]
}

export const areEqualsArr = (a: any[], b: any[]) => {
  if (a === b) return true
  if (a == null || b == null) return false
  if (a.length !== b.length) return false

  const sortedA = a.sort()
  const sortedB = b.sort()
  for (let i = 0; i < sortedA.length; ++i) {
    if (sortedA[i] !== sortedB[i]) return false
  }
  return true
}
