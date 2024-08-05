export type TagNames =
  | keyof HTMLElementTagNameMap
  | keyof HTMLElementDeprecatedTagNameMap
  | 'comment'

export const supportTags: Partial<TagNames>[] = [
  'a',
  'abbr',
  /** @deprecated */
  'acronym',
  'address',
  'area',
  'b',
  'base',
  'basefont',
  /** @deprecated */
  'big',
  'blockquote',
  'body', // core
  'br',
  'caption',
  /** @deprecated */
  'center',
  'cite',
  'code',
  'col',
  'colgroup',
  /** @unknown */
  'comment',
  'dd',
  'del',
  'dfn',
  /** @deprecated */
  'dir',
  'div', // core+
  'dl',
  'dt',
  'em',
  'fieldset',
  /** @deprecated */
  'font',
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
  'link',
  'listing',
  'map',
  'nobr',
  'ol',
  'optgroup',
  'option',
  'p', // core+
  'pre',
  's',
  'samp',
  'small',
  'span', // core
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
  'title',
  'u',
  'tr',
  /** @deprecated */
  'tt',
  'u',
  'ul',
  'var'
]

export const supportCssCore: string[] = [
  'color',
  'font',
  'font-family',
  'font-style',
  'font-variant',
  'font-size',
  'font-weight',
  'text-decoration',
  'background',
  'background-color',
  'text-align',
  'vertical-align',
  'letter-spacing',
  'line-height',
  'white-space',
  'display',
  'border',
  'border-color',
  'border-style',
  'border-width',
  'src',
  'size',
  'marks',
  'page-break-before',
  'page-break-after',
  'page-break-inside',
  'list-style',
  'list-style-type',
  'unicode-bidi',
  'border-collapse'
]

export const supportCssExtend = [...supportCssCore].concat([
  'text-indent',
  'margin',
  'margin-left',
  'margin-right',
  'margin-top',
  'margin-bottom'
])

export const supportCssFull = supportCssExtend.concat([
  'width',
  'height',
  'padding',
  'padding-left',
  'padding-right',
  'padding-top',
  'padding-bottom',
  'border-left',
  'border-right',
  'border-top',
  'border-bottom',
  'border-left-color',
  'border-left-width',
  'border-left-style',
  'border-right-color',
  'border-right-width',
  'border-right-style',
  'border-top-color',
  'border-top-width',
  'border-top-style',
  'border-bottom-color',
  'border-bottom-width',
  'border-bottom-style'
])

type CssCoreType = typeof supportCssCore

type CssExtendType = typeof supportCssExtend

type CssFullType = typeof supportCssFull

// TODO: định nghĩa lại key của supportCssProperties
// NOTE: hiện tại dùng `typeof supportTags` bị lỗi nên tạm thời để `string`
export const supportCssProperties: Record<
  string,
  CssCoreType | CssExtendType | CssFullType
> = {
  a: supportCssFull,
  abbr: supportCssFull,
  /** @deprecated */
  acronym: supportCssFull,
  address: supportCssFull,
  area: supportCssFull,
  b: supportCssFull,
  base: supportCssFull,
  basefont: supportCssFull,
  /** @deprecated */
  big: supportCssFull,
  blockquote: supportCssFull,
  body: supportCssCore, // core
  br: supportCssFull,
  caption: supportCssFull,
  /** @deprecated */
  center: supportCssFull,
  cite: supportCssFull,
  code: supportCssFull,
  col: supportCssFull,
  colgroup: supportCssFull,
  /** @unknown */
  comment: supportCssFull,
  dd: supportCssFull,
  del: supportCssFull,
  dfn: supportCssFull,
  /** @deprecated */
  dir: supportCssFull,
  div: supportCssExtend, // core+
  dl: supportCssFull,
  dt: supportCssFull,
  em: supportCssFull,
  fieldset: supportCssFull,
  /** @deprecated */
  font: supportCssFull,
  h1: supportCssFull,
  h2: supportCssFull,
  h3: supportCssFull,
  h4: supportCssFull,
  h5: supportCssFull,
  h6: supportCssFull,
  hr: supportCssFull,
  i: supportCssFull,
  img: supportCssFull,
  input: supportCssFull,
  ins: supportCssFull,
  kbd: supportCssFull,
  label: supportCssFull,
  legend: supportCssFull,
  li: supportCssFull,
  link: supportCssFull,
  listing: supportCssFull,
  map: supportCssFull,
  nobr: supportCssFull,
  ol: supportCssFull,
  optgroup: supportCssFull,
  option: supportCssFull,
  p: supportCssExtend, // core+
  pre: supportCssFull,
  s: supportCssFull,
  samp: supportCssFull,
  small: supportCssFull,
  span: supportCssCore, // core
  /** @deprecated */
  strike: supportCssFull,
  strong: supportCssFull,
  style: supportCssFull,
  sub: supportCssFull,
  sup: supportCssFull,
  table: supportCssFull,
  tbody: supportCssFull,
  td: supportCssFull,
  textarea: supportCssFull,
  tfoot: supportCssFull,
  th: supportCssFull,
  thead: supportCssFull,
  title: supportCssFull,
  u: supportCssFull,
  tr: supportCssFull,
  /** @deprecated */
  tt: supportCssFull,
  ul: supportCssFull,
  var: supportCssFull
}

export const supportMediaQueryTypes: string[] = []

export const supportMediaQueryFeatures: string[] = []

export const supportMediaKeywords: string[] = []
