export const CSS_RULE = {
  CSSGroupingRule: 'CSSGroupingRule',
  CSSStyleRule: 'CSSStyleRule',
  CSSImportRule: 'CSSImportRule',
  CSSMediaRule: 'CSSMediaRule',
  CSSFontFaceRule: 'CSSFontFaceRule',
  CSSPageRule: 'CSSPageRule',
  CSSNamespaceRule: 'CSSNamespaceRule',
  CSSKeyframesRule: 'CSSKeyframesRule',
  CSSKeyframeRule: 'CSSKeyframeRule',
  CSSCounterStyleRule: 'CSSCounterStyleRule',
  CSSSupportsRule: 'CSSSupportsRule',
  CSSFontFeatureValuesRule: 'CSSFontFeatureValuesRule',
  CSSFontPaletteValuesRule: 'CSSFontPaletteValuesRule',
  CSSLayerBlockRule: 'CSSLayerBlockRule',
  CSSLayerStatementRule: 'CSSLayerStatementRule',
  CSSPropertyRule: 'CSSPropertyRule'
}

type KeyOfCSSRule = keyof typeof CSS_RULE
type ValueOfCSSRule = (typeof CSS_RULE)[KeyOfCSSRule]

export const CSS_RULE_SYNTAX: Record<ValueOfCSSRule, string> = {
  CSSGroupingRule: 'CSSGroupingRule',
  CSSStyleRule: 'CSSStyleRule',
  CSSImportRule: '@import',
  CSSMediaRule: '@media',
  CSSFontFaceRule: '@font-face',
  CSSPageRule: '@page',
  CSSNamespaceRule: '@namespace',
  CSSKeyframesRule: '@keyframes',
  CSSKeyframeRule: '@keyframes',
  CSSCounterStyleRule: 'CSSCounterStyleRule',
  CSSSupportsRule: '@supports',
  CSSFontFeatureValuesRule: '@font-feature-values',
  CSSFontPaletteValuesRule: '@font-palette-values',
  CSSLayerBlockRule: '@layer',
  CSSLayerStatementRule: '@layer',
  CSSPropertyRule: '@property'
}
