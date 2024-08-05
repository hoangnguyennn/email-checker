type CustomObject<T = any> = {
  [key: string]: T
}

export const mapToObject = <V, K extends string>(aMap: Map<K, V>) => {
  const results: CustomObject = {}
  aMap.forEach((value, key) => {
    if (value instanceof Set) {
      results[key] = [...value]
    } else {
      results[key] = value
    }
  })

  return results
}
