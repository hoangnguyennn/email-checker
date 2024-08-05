export type TagNames =
  | keyof HTMLElementTagNameMap
  | keyof HTMLElementDeprecatedTagNameMap

export const supportTags: Partial<TagNames>[] = [
  'a',
  'abbr',
  /** @deprecated */
  'acronym',
  'address',
  'area',
  'b',
  'bdo',
  /** @deprecated */
  'big',
  'blockquote',
  'br',
  'button',
  'caption',
  /** @deprecated */
  'center',
  'cite',
  'code',
  'col',
  'colgroup',
  'dd',
  'del',
  'dfn',
  /** @deprecated */
  'dir',
  'div',
  'dl',
  'dt',
  'em',
  'fieldset',
  /** @deprecated */
  'font',
  'form',
  'h1',
  'h2',
  'h3',
  'h4',
  'h5',
  'h6',
  'hr',
  'i',
  'img',
  'input',
  'ins',
  'kbd',
  'label',
  'legend',
  'li',
  'map',
  'menu',
  'ol',
  'optgroup',
  'option',
  'p',
  'pre',
  'q',
  's',
  'samp',
  'select',
  'small',
  'span',
  /** @deprecated */
  'strike',
  'strong',
  'style',
  'sub',
  'sup',
  'table',
  'tbody',
  'td',
  'textarea',
  'tfoot',
  'th',
  'thead',
  'u',
  'tr',
  /** @deprecated */
  'tt',
  'u',
  'ul',
  'var'
]

export const supportCssProperties = [
  'azimuth',
  'background',
  'background-blend-mode',
  'background-clip',
  'background-color',
  'background-image',
  'background-origin',
  'background-position',
  'background-repeat',
  'background-size',
  'border',
  'border-bottom',
  'border-bottom-color',
  'border-bottom-left-radius',
  'border-bottom-right-radius',
  'border-bottom-style',
  'border-bottom-width',
  'border-collapse',
  'border-color',
  'border-left',
  'border-left-color',
  'border-left-style',
  'border-left-width',
  'border-radius',
  'border-right',
  'border-right-color',
  'border-right-style',
  'border-right-width',
  'border-spacing',
  'border-style',
  'border-top',
  'border-top-color',
  'border-top-left-radius',
  'border-top-right-radius',
  'border-top-style',
  'border-top-width',
  'border-width',
  'box-sizing',
  'break-after',
  'break-before',
  'break-inside',
  'caption-side',
  'clear',
  'color',
  'column-count',
  'column-fill',
  'column-gap',
  'column-rule',
  'column-rule-color',
  'column-rule-style',
  'column-rule-width',
  'column-span',
  'column-width',
  'columns',
  'direction',
  'display',
  'elevation',
  'empty-cells',
  'float',
  'font',
  'font-family',
  'font-feature-settings',
  'font-kerning',
  'font-size',
  'font-size-adjust',
  'font-stretch',
  'font-style',
  'font-synthesis',
  'font-variant',
  'font-variant-alternates',
  'font-variant-caps',
  'font-variant-east-asian',
  'font-variant-ligatures',
  'font-variant-numeric',
  'font-weight',
  'height',
  'image-orientation',
  'image-resolution',
  'ime-mode',
  'isolation',
  'layout-flow',
  'layout-grid',
  'layout-grid-char',
  'layout-grid-char-spacing',
  'layout-grid-line',
  'layout-grid-mode',
  'layout-grid-type',
  'letter-spacing',
  'line-break',
  'line-height',
  'list-style',
  'list-style-position',
  'list-style-type',
  'margin',
  'margin-bottom',
  'margin-left',
  'margin-right',
  'margin-top',
  'marker-offset',
  'max-height',
  'max-width',
  'min-height',
  'min-width',
  'mix-blend-mode',
  'object-fit',
  'object-position',
  'opacity',
  'outline',
  'outline-color',
  'outline-style',
  'outline-width',
  'overflow',
  'overflow-x',
  'overflow-y',
  'padding',
  'padding-bottom',
  'padding-left',
  'padding-right',
  'padding-top',
  'page-break-after',
  'page-break-before',
  'page-break-inside',
  'pause',
  'pause-after',
  'pause-before',
  'pitch',
  'pitch-range',
  'quotes',
  'richness',
  'speak',
  'speak-header',
  'speak-numeral',
  'speak-punctuation',
  'speech-rate',
  'stress',
  'table-layout',
  'text-align',
  'text-align-last',
  'text-autospace',
  'text-combine-upright',
  'text-decoration',
  'text-decoration-color',
  'text-decoration-line',
  'text-decoration-skip',
  'text-decoration-style',
  'text-emphasis',
  'text-emphasis-color',
  'text-emphasis-style',
  'text-indent',
  'text-justify',
  'text-kashida-space',
  'text-orientation',
  'text-overflow',
  'text-transform',
  'text-underline-position',
  'unicode-bidi',
  'vertical-align',
  'voice-family',
  'white-space',
  'width',
  'word-break',
  'word-spacing',
  'word-wrap',
  'writing-mode',
  'zoom'
]

export type SupportCssProperties = typeof supportCssProperties

export const supportMediaTypes = ['all', 'screen']

export type SupportMediaTypes = typeof supportMediaTypes

export const supportMediaFeatures = [
  'min-width',
  'max-width',
  'min-device-width',
  'max-device-width',
  'orientation',
  'min-resolution',
  'max-resolution'
]

export type SupportMediaFeatures = typeof supportMediaFeatures

export const supportMediaKeywords = ['and', 'only']

export type SupportMediaKeywords = typeof supportMediaKeywords
