import { getStyleSheet } from '../utils/css/getStyleSheet'
import {
  checkUnsupportCss as checkUnsupportCssInGmail,
  checkUnsupportTags as checkUnsupportTagsInGmail
} from './gmail'

import {
  checkUnsupportTags as checkUnsupportTagsOutlook,
  checkUnsupportCss as checkUnsupportCssInOutlook
} from './outlook'

export const checkUnsupportTags = (doc: Document) => {
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
