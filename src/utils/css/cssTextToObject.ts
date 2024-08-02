type CustomObject = {
  [key: string]: string
}

/**
 * Convert cssText sang dạng object
 *
 * @param cssText
 * @returns thông tin css ở dạng object
 */
export const cssTextToObject = (cssText: string) => {
  const results: CustomObject = {}

  const declarations = cssText
    // xóa các dấu space thừa
    .replace(/\s+/g, ' ')
    // tách các khai báo bằng ';'
    .split(';')
    // loại bỏ item rỗng, vì dấu ';' ở cuối
    .filter(item => item)

  declarations.forEach(declaration => {
    const [property, value] = declaration.split(':').map(item => item.trim())
    results[property] = value
  })

  return results
}
