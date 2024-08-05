import { TagNames as TagNamesGmail } from '../rules/gmail'
import { TagNames as TagNamesOutlook } from '../rules/outlook'
import { getStyleSheet } from '../utils/css/getStyleSheet'
import {
  checkUnsupportCss as checkUnsupportCssInGmail,
  checkUnsupportTags as checkUnsupportTagsInGmail,
  CheckUnsupportCssReturnType as CheckUnsupportCssReturnTypeGmail
} from './gmail'

import {
  checkUnsupportTags as checkUnsupportTagsOutlook,
  checkUnsupportCss as checkUnsupportCssInOutlook,
  CheckUnsupportCssReturnType as CheckUnsupportCssReturnTypeOutlook
} from './outlook'

export type ReturnType = {
  gmail: {
    tags: TagNamesGmail[]
    css: CheckUnsupportCssReturnTypeGmail
  }
  outlook: {
    tags: TagNamesOutlook[]
    css: CheckUnsupportCssReturnTypeOutlook
  }
}

/**
 * Kiểm tra xem thẻ HTML và thuộc tính CSS nào không được hỗ trợ trong HTML mail
 *
 * @param {Document} doc
 * @returns {ReturnType}
 */
export const checkUnsupportTags = (doc: Document): ReturnType => {
  const styleSheet = getStyleSheet(doc)

  // gmail
  const unsupportTagsInGmail = checkUnsupportTagsInGmail(doc)
  const unsupportPropertiesInGmail = checkUnsupportCssInGmail(styleSheet)

  //outlook
  const unsupportTagsInOutlook = checkUnsupportTagsOutlook(doc)
  const unsupportPropertiesInOutlook = checkUnsupportCssInOutlook(
    styleSheet,
    doc
  )

  return {
    gmail: {
      tags: unsupportTagsInGmail,
      css: unsupportPropertiesInGmail
    },
    outlook: {
      tags: unsupportTagsInOutlook,
      css: unsupportPropertiesInOutlook
    }
  }
}
