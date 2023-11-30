/**
 * Recursively sorts L & R subarrays until full arr is sorted
 * @param arr the array of numbers we're trying to sort
 * @param lo the starting point of the array
 * @param hi the end point of the array
 * @returns
 */
function qs(arr: number[], lo: number, hi: number): void {
  // Base Case: lo and hi meet
  if (lo >= hi) {
    return;
  }

  // Recursive Case:
  const pivotIndex = partition(arr, lo, hi);

  // Quick sort left and right sides of the array
  // NOT including the pivot
  qs(arr, lo, pivotIndex - 1);
  qs(arr, pivotIndex + 1, hi);
}

/**
 * Weak sorts the array, moves the pivot, & returns the new pivot index
 * @param arr the array of numbers we're trying to sort
 * @param lo the starting point of the array
 * @param hi the end point of the array
 * @returns the pivot index
 */
function partition(arr: number[], lo: number, hi: number) {
  const pivot = arr[hi]; // start w pivot close to end of arr

  let index = lo - 1; // where we put the weakly sorted values (starting at front of sub array)

  // weak sort the values:
  for (let i = lo; i < hi; ++i) {
    if (arr[i] <= pivot) {
      index++;

      // Place the smaller values BEFORE the pivot point using swap
      const tmp = arr[i];
      arr[i] = arr[index];
      arr[index] = tmp;
    }
  }

  // move our pivot:
  index++;
  arr[hi] = arr[index];
  arr[index] = pivot; // our old pivot value is moved to the left

  return index;
}

export function quick_sort(arr: number[]): void {
  qs(arr, 0, arr.length - 1);
}

const input = [64, 8, 49, 7, 25, 5];
console.log("before", input);
quick_sort(input);
console.log("after", input);
