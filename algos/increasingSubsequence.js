/**
 * Count the number of increasing subsequences in array A of length n consisting of n distinct integers (recursively).
 */

/**
 * Find the number of increasing subsequences ending at index i
 * @param {*} arr - an array of integers
 * @param {*} i - the index of the last element in the subsequence
 * @returns {number} - the number of increasing subsequences ending at index i
 */
function IS(arr, i) {
  if (i == 0) return 1;

  let count = 1;

  for (let j = 0; j < i; j++) {
    if (arr[j] < arr[i]) {
      count += IS(arr, j);
    }
  }

  return count;
}

function countIncreasingSubsequences(arr) {
  let count = 0;

  for (let i = 0; i < arr.length; i++) count += IS(arr, i);

  return count;
}

const input = [3, 2, 4, 5, 4];
console.log(countIncreasingSubsequences(input));

/**
 * base case:
 * - what is the smallest valid input?
 * - an array of length 1.. so i == 0
 *
 * recursive case:
 * - how can we break the problem down into smaller subproblems?
 *
 *
 * - compute count of increasing subsequences ending at each index
 * - return sum of all values
 *
 * https://www.geeksforgeeks.org/count-all-increasing-subsequences/
 *
 */
