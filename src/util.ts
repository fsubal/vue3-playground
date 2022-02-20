export function objectMap<From, To>(
  object: Record<string, From>,
  fn: (key: string, values: From) => readonly [string, To] | [string, To]
) {
  return Object.fromEntries(
    Object.entries(object).map(([key, value]) => fn(key, value))
  );
}

export function transformKeys<V>(
  object: Record<string, V>,
  fn: (key: string) => string
) {
  return objectMap(object, (key, value) => [fn(key), value]);
}
