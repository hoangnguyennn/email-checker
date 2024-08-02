import { getStyleSheet } from '../utils/css/getStyleSheet'
import {
  checkUnsupportCss as checkUnsupportCssInGmail,
  checkUnsupportTags as checkUnsupportTagsInGmail
} from './gmail'

export const checkUnsupportTags = (doc: Document) => {
  const styleSheet = getStyleSheet(doc)

  const unsupportTagsInGmail = checkUnsupportTagsInGmail(doc)
  const unsupportPropertiesInGmail = checkUnsupportCssInGmail(styleSheet)

  return {
    gmail: {
      tags: unsupportTagsInGmail,
      css: unsupportPropertiesInGmail
    }
  }
}
