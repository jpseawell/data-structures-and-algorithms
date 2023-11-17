export default function binarySearch(
  needle: number,
  haystack: number[]
): boolean {
  let lo = 0;
  let hi = haystack.length;

  do {
    // To find the midpoint:
    // hi - lo = range
    // range / 2 = midpoint
    // lo + midpoint = offset midpoint by the lower bound
    // (otherwise we'd start at zero but we want to start at lo)
    // floor (offsetMidpoint) in case it's a decimal
    const m = Math.floor(lo + (hi - lo) / 2);
    const v = haystack[m];

    if (v === needle) return true;
    else if (v < needle) {
      // Assume needle is in right half
      // move lo up to the middle (plus 1)

      lo = m + 1; // inclusive
    } else {
      // Assume needle is in left half
      // move hi down to the middle

      hi = m; // exclusive
    }
  } while (lo < hi);

  return false;
}
