/**
 * chuyển đổi text từ dạng kebab-case sang camelCase
 *
 * @param text
 * @returns
 */
export const kebabToCamel = (text: string) => {
  return text
    .split('-')
    .map((item, index) => {
      if (index === 0) return item
      return toCapitalize(item)
    })
    .join('')
}

/**
 * chuyển đổi text sang dạng capitalize. Ví dụ: hoang -> Hoang
 *
 * @param {string} text input
 * @returns {string}
 */
export const toCapitalize = (text: string): string => {
  if (text.length < 2) return text
  return `${text[0].toUpperCase()}${text.slice(1)}`
}
