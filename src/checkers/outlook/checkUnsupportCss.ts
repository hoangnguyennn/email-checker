import { CSS_RULE, CSS_RULE_SYNTAX } from '../../constants'
import { supportCssFull, supportCssProperties } from '../../rules/outlook'
import { mapToObject } from '../../utils/convertDataType'
import { cssTextToObject } from '../../utils/css/cssTextToObject'
import { decomposeMediaQuery } from '../../utils/css/decomposeMediaQuery'

type ReturnType = {
  /** danh sách thuộc tính CSS không được hỗ trợ */
  properties: string[]
  /** danh sách thuộc tính CSS không được hỗ trợ trên tag cụ thể */
  propertiesWithTags: Record<string, string[]>
  /** các cú pháp không được hỗ trợ của media query */
  media: {
    types: string[]
    features: string[]
    keywords: string[]
  }
  /** các cú pháp at-rule khác không được hỗ trợ */
  atRules: string[]
}

export const checkUnsupportCss = (
  CSSStyleSheet: CSSStyleSheet,
  doc: Document
): ReturnType => {
  const unsupportProperties = new Set<string>()
  const unsupportPropertiesWithTags = new Map<string, Set<string>>()
  const unsupportAtRules = new Set<string>()
  const unsupportMediaTypes = new Set<string>()
  const unsupportMediaFeatures = new Set<string>()
  const unsupportMediaKeywords = new Set<string>()

  console.log(CSSStyleSheet)

  for (let cssRule of CSSStyleSheet.cssRules) {
    /**
     * Check với CSS khai báo thông thường
     */
    if (cssRule.constructor.name === CSS_RULE.CSSStyleRule) {
      checkUnsupportProperties(cssRule as CSSStyleRule, unsupportProperties)
      checkUnsupportPropertiesWithTags(
        cssRule as CSSStyleRule,
        unsupportPropertiesWithTags,
        doc
      )
      continue
    }

    /**
     * CSS sử dụng `@keyframe`, `@font-face` và các at-rule khác sẽ không được hỗ trợ
     */
    const syntax = CSS_RULE_SYNTAX[cssRule.constructor.name]
    unsupportAtRules.add(syntax)
  }

  /**
   * chuyển unsupportPropertiesWithTags từ Map sang Object
   */
  const unsupportPropertiesWithTagsObject = mapToObject(
    unsupportPropertiesWithTags
  )

  return {
    properties: [...unsupportProperties],
    propertiesWithTags: unsupportPropertiesWithTagsObject,
    media: {
      types: [...unsupportMediaTypes],
      features: [...unsupportMediaFeatures],
      keywords: [...unsupportMediaKeywords]
    },
    atRules: [...unsupportAtRules]
  }
}

const checkUnsupportProperties = (
  rule: CSSStyleRule,
  unsupportProperties: Set<string>
) => {
  const styles = cssTextToObject(rule.style.cssText)
  Object.keys(styles).forEach(property => {
    if (!supportCssFull.includes(property)) {
      unsupportProperties.add(property)
    }
  })
}

const checkUnsupportPropertiesWithTags = (
  rule: CSSStyleRule,
  unsupportProperties: Map<string, Set<string>>,
  doc: Document
) => {
  const selector = rule.selectorText
  const elements = doc.querySelectorAll(selector)
  const styles = cssTextToObject(rule.style.cssText)

  /**
   * duyệt qua từng thuộc tính, kiểm tra xem nếu thuộc tính đó apply cho những element nào
   */
  Object.keys(styles).forEach(property => {
    elements.forEach(element => {
      const tagName = element.tagName.toLowerCase()
      if (!(supportCssProperties[tagName] || []).includes(property)) {
        if (unsupportProperties.has(tagName)) {
          unsupportProperties.get(tagName).add(property)
        } else {
          const newSet = new Set([property])
          unsupportProperties.set(tagName, newSet)
        }
      }
    })
  })
}
