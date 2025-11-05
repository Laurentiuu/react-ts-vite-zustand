import * as yup from 'yup'

export function isHash(fieldName?: string) {
  if (fieldName === undefined) {
    return yup.string().max(64, 'Hash must have 64 characters').min(64, 'Hash must have 64 characters')
  }
  return yup
    .string()
    .max(64, fieldName + ' must have 64 characters')
    .min(64, 'Hash must have 64 characters')
}

export function isAddress(fieldName?: string) {
  if (fieldName === undefined) {
    return yup
      .string()
      .max(42, 'This field must have have 42 characters')
      .min(42)
      .matches(/^0x.*$/, 'This field must starts with 0x')
  }

  return yup
    .string()
    .max(42, fieldName + ' have 42 characters')
    .min(42)
    .matches(/^0x.*$/, fieldName + ' must starts with 0x')
}

export function isText(fieldName?: string) {
  if (fieldName === undefined) {
    return yup.string().max(42, 'This field must have have 42 characters')
  }

  return yup.string().max(42, fieldName + ' have 42 characters')
}
