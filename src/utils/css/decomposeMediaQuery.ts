type ReturnType = {
  /** Media type, `null` là không có */
  mediaType: 'all' | 'print' | 'screen' | null
  /** Media features */
  mediaFeatures: string[]
  /** Media keyword, `null` là không có */
  keyword: 'not' | 'only' | null
}

/**
 * Hàm này sẽ rã media query thành object
 *
 * @param {string} mediaText
 * @returns {ReturnType} Xem {@link ReturnType} để biết thêm chi tiết
 */
export const decomposeMediaQuery = (mediaText: string): ReturnType => {
  const mediaFeatures = new Set<string>()
  let keyword: ReturnType['keyword'] = null
  let mediaType: ReturnType['mediaType'] = null

  const parts = mediaText.split(' and ')
  // phần đầu tiên có thể là media feature hoặc media type
  if (parts[0].startsWith('(')) {
    // phần này là media feature
    const [property] = decomposeMediaFeature(parts[0])
    mediaFeatures.add(property)
  } else {
    // phần là media type
    const mediaTypeParts = parts[0].split(' ')
    if (mediaTypeParts.length > 1) {
      // có keyword
      keyword = mediaTypeParts[0] as ReturnType['keyword']
      mediaType = mediaTypeParts[1] as ReturnType['mediaType']
    } else {
      // không có keyword
      mediaType = mediaTypeParts[0] as ReturnType['mediaType']
    }
  }

  /** rã các media feature còn lại */
  parts.slice(1).forEach(part => {
    const [property] = decomposeMediaFeature(part)
    mediaFeatures.add(property)
  })

  return {
    mediaType: mediaType,
    mediaFeatures: [...mediaFeatures],
    keyword: keyword
  }
}

/**
 * Hàm này rã media feature thành thuộc tính CSS và giá trị
 *
 * @param {string} mediaFeature
 * @returns {[string, string]} Một tuple gồm tên thuộc tính CSS và giá trị
 */
export const decomposeMediaFeature = (
  mediaFeature: string
): [string, string] => {
  // xóa dấu bọc '(' và ')'
  mediaFeature = mediaFeature.replace(/[\(\)]/g, '')
  const [property, value] = mediaFeature.split(':').map(item => item.trim())
  return [property, value]
}
