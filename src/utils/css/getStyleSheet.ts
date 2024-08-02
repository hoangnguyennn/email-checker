/**
 * document.styleSheets sẽ rỗng nếu document được tạo từ DOMParser
 * hàm này sử dụng iframe để lấy ra styleSheets từ các thẻ `style`
 *
 * From: https://github.com/tomhodgins/parse-css-stylesheet/blob/master/index.js
 *
 * @param {Document} doc
 * @returns {CSSStyleSheet}
 */
export const getStyleSheet = (doc: Document): CSSStyleSheet => {
  const styleTags = doc.querySelectorAll('style')
  let styleContent = ''
  // đọc nội dung của tất cả thẻ `style`
  styleTags.forEach(styleTag => {
    styleContent += styleTag.textContent
  })

  const iframe = document.createElement('iframe')
  document.head.appendChild(iframe)

  const style = iframe.contentDocument.createElement('style')
  style.textContent = styleContent
  iframe.contentDocument.head.appendChild(style)

  // lấy ra style sheet
  const stylesheet = iframe.contentDocument.styleSheets[0]

  // xóa iframe
  iframe.remove()

  return stylesheet
}
