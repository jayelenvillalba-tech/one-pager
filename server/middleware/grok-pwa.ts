/**
 * Placeholder middleware — Nitro expects server/middleware/ to exist
 * when serverDir is configured. This is a no-op pass-through.
 */
export default async function placeholder(
  _event: unknown,
  next: () => unknown | Promise<unknown>,
): Promise<unknown> {
  return next();
}
