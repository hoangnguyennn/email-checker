import { CSS_RULE, CSS_RULE_SYNTAX } from '../../constants'
import {
  supportCssProperties,
  supportMediaFeatures,
  supportMediaKeywords,
  supportMediaTypes
} from '../../rules/gmail'
import { cssTextToObject } from '../../utils/css/cssTextToObject'
import { decomposeMediaQuery } from '../../utils/css/decomposeMediaQuery'

type ReturnType = {
  /** danh sách thuộc tính CSS không được hỗ trợ */
  properties: string[]
  /** các cú pháp không được hỗ trợ của media query */
  media: {
    types: string[]
    features: string[]
    keywords: string[]
  }
  /** các cú pháp at-rule khác không được hỗ trợ */
  atRules: string[]
}

/**
 * Kiểm tra các cú pháp CSS không hỗ trợ trong Gmail
 * TODO: kiểm tra inline CSS
 *
 * @param {CSSStyleSheet} cssStyleSheet
 * @returns {ReturnType} các cú pháp CSS không được hõ trợ
 */
export const checkUnsupportCss = (cssStyleSheet: CSSStyleSheet): ReturnType => {
  const unsupportProperties = new Set<string>()
  const unsupportAtRules = new Set<string>()
  const unsupportMediaTypes = new Set<string>()
  const unsupportMediaFeatures = new Set<string>()
  const unsupportMediaKeywords = new Set<string>()

  for (let cssRule of cssStyleSheet.cssRules) {
    /**
     * NOTE: cssStyleSheet có thể được lấy ra từ iframe
     * không thể sử dụng `cssRule instanceof CSSStyleRule` để kiểm tra
     * vì vậy tôi đã kiểm tra bằng tên của constructor
     */

    /**
     * Check với CSS khai báo thông thường
     */
    if (cssRule.constructor.name === CSS_RULE.CSSStyleRule) {
      checkUnsupportProperties(cssRule as CSSStyleRule, unsupportProperties)
      continue
    }

    /**
     * Check với CSS khai báo bên trong `@media`
     */
    if (cssRule.constructor.name === CSS_RULE.CSSMediaRule) {
      const rule = cssRule as CSSMediaRule
      const { keyword, mediaFeatures, mediaType } = decomposeMediaQuery(
        rule.media.mediaText
      )

      if (keyword && !supportMediaKeywords.includes(keyword)) {
        unsupportMediaKeywords.add(keyword)
      }

      if (mediaType && !supportMediaTypes.includes(mediaType)) {
        unsupportMediaTypes.add(mediaType)
      }

      mediaFeatures.forEach(feature => {
        if (!supportMediaFeatures.includes(feature)) {
          unsupportMediaFeatures.add(feature)
        }
      })

      for (let mediaCssRule of rule.cssRules) {
        if (cssRule.constructor.name === CSS_RULE.CSSStyleRule) {
          checkUnsupportProperties(
            mediaCssRule as CSSStyleRule,
            unsupportProperties
          )
        }
      }
      continue
    }

    /**
     * CSS sử dụng `@keyframe`, `@font-face` và các at-rule khác sẽ không được hỗ trợ
     */
    const syntax = CSS_RULE_SYNTAX[cssRule.constructor.name]
    unsupportAtRules.add(syntax)
  }

  return {
    properties: [...unsupportProperties],
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
    if (!supportCssProperties.includes(property)) {
      unsupportProperties.add(property)
    }
  })
}
