// Given two crystal balls that will break if dropped from high enough distance,
// determine the exact spot in which it will break in the most optimized way

export default function twoCrystalBalls(breaks: boolean[]): number {
  // We hop by square roots in order to beat O(n) time complexity
  const jmpAmount = Math.floor(Math.sqrt(breaks.length));

  let i = jmpAmount;
  // hop a square root at a time until our first crystal ball is broken
  for (; i < breaks.length; i += jmpAmount) {
    if (breaks[i]) {
      break; // first crystal ball breaks
    }
  }

  i -= jmpAmount; // go back to last 'good' position before first ball broke

  // hop 1 at a time until we locate the exact spot of the break...
  // this is at most O(sqrt(n)) bc we iterate over only 1 sqrt(n) segment
  for (let j = 0; j <= jmpAmount && i < breaks.length; ++j, ++i) {
    if (breaks[i]) {
      return i; // second crystal ball breaks - we found our breaking point!!
    }
  }

  return -1; // never broke :/
}
