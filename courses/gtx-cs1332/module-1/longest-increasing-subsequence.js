/**
 * This is not actually part of the GTX course, but I wanted to see if I could
 * learn from it in order to complete the total count of increasing subsequences problem.
 */

/**
 * Recursively find the length of the longest increasing subsequence (LIS) ending at index i.
 * @param {*} arr - an array of integers
 * @param {*} i - the index of the last element in the LIS
 * @returns
 */
function LIS(arr, i) {
  /**
   * The smallest valid input is when the array has just one element.
   * In that case, the length of the LIS is 1 because there is only 1 possible subsequence.
   */
  if (i == 0) return 1;

  let count = 1;

  // For every element to the left of i
  for (let j = 0; j < i; j++) {
    // if the number is smaller
    if (arr[j] < arr[i]) {
      // consider it as part of the LIS and find it's LIS
      count = Math.max(count, 1 + LIS(arr, j)); // We use Math.MAX here because we're only concerned with the LONGEST increasing subsequence
    }
  }

  return count;
}

function findLengthOfLIS(arr) {
  let lengthOfLIS = 0;

  for (let i = 0; i < arr.length; i++)
    lengthOfLIS = Math.max(lengthOfLIS, LIS(arr, i));

  return lengthOfLIS;
}

const input = [10, 9, 2, 5, 3, 7, 101, 18];
console.log(findLengthOfLIS(input, input.length - 1));

/**
 * base condition:
 * - what is the smallest valid input?
 * - i == 0 - when the array has just one element
 *
 * recursive condition:
 * - how can we break the problem down into smaller subproblems?
 * - if we know LIS(j) for all j < i, then we can find LIS(i)
 *
 * References:
 * - https://www.callicoder.com/longest-increasing-subsequence/
 */
