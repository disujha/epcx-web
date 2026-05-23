/**
 * Combines CSS classes dynamically.
 * Works as a lightweight substitute for clsx and tailwind-merge to avoid unnecessary bloat.
 */
export function cn(...inputs: (string | undefined | null | boolean | { [key: string]: boolean })[]) {
  const classes: string[] = [];
  for (const input of inputs) {
    if (!input) continue;
    if (typeof input === 'string') {
      classes.push(input);
    } else if (Array.isArray(input)) {
      // safe fallthrough for arrays
      classes.push(...input.filter(Boolean));
    } else if (typeof input === 'object') {
      for (const [key, value] of Object.entries(input)) {
        if (value) {
          classes.push(key);
        }
      }
    }
  }
  return classes.join(' ');
}
