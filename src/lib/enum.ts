export type EnumOption = {
  label: any
  value: any
}

const toArr = (enumObj: any): any[] => {
  const keys = Object.keys(enumObj)

  return keys.map((key) => ({
    label: key,
    value: enumObj[key],
  }))
}

function getKeyByValue<T extends string>(enumObj: Record<string, T>, value: T): string {
  return Object.keys(enumObj).find((key) => enumObj[key] === value) ?? "-"
}

function getIndexByValue<T extends string>(enumObj: Record<string, T>, value: T): number {
  const values = Object.values(enumObj)
  const index = values.indexOf(value)
  return index !== -1 ? index : 0
}

const mapStringToEnum = <T extends object>(value: string, enumType: T): T[keyof T] => {
  if (value in enumType) {
    return enumType[value as keyof T]
  } else {
    throw new Error(`Invalid enum value: ${value}`)
  }
}

export const Enum = {
  toArr,
  getKeyByValue,
  getIndexByValue,
  mapStringToEnum,
}
