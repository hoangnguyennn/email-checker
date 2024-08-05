import { TagNames, supportTags } from '../../rules/outlook'

/**
 * Kiểm tra các thẻ HTML không hỗ trợ trong Outlook
 *
 * @param {Document} doc
 * @returns {string[]} danh sách các thẻ HTML không hỗ trợ
 */
export const checkUnsupportTags = (doc: Document): TagNames[] => {
  const allElements = doc.querySelectorAll('*')
  const unsupportTags = new Set<TagNames>()

  for (let element of allElements) {
    const tagName = element.tagName.toLowerCase() as TagNames
    if (!supportTags.includes(tagName)) {
      unsupportTags.add(tagName)
    }
  }

  return [...unsupportTags]
}
