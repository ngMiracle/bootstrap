export function toNumber(val: string | number | null): number {
  if (typeof val === 'string') {
    return Number.parseInt(val, 10)
  } else if (typeof val === 'number') {
    return val
  } else {
    return 0
  }
}
