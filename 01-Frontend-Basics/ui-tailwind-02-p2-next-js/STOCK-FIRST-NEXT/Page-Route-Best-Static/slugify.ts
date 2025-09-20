export function slugify(str: string): string {
  return str
    .toLowerCase()
    .trim()
    .replace(/\s+/g, '-')        // replace spaces with -
    .replace(/[^\w\-]+/g, '')    // remove all non-word chars
    .replace(/\-\-+/g, '-');     // replace multiple - with single -
}
