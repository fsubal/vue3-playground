export function objectMap<T, V>(
  object: Record<string, T>,
  fn: (key: string, values: T) => readonly [string, V] | [string, V]
) {
  return Object.fromEntries(
    Object.entries(object).map(([key, value]) => fn(key, value))
  );
}

export function transformKeys<T, V>(
  object: Record<string, any>,
  fn: (key: string) => string
) {
  return objectMap(object, (key, value) => [fn(key), value]);
}
