export default function bubbleSort(arr: number[]) {
  for (let i = 0; i < arr.length; i++) {
    /**
     * j < arr.length - 1 : Go up to the last element after first iteration
     * j < (arr.length - 1) - i : Exclude largest element from previous iteration
     */
    for (let j = 0; j < arr.length - 1 - i; j++) {
      if (arr[j] > arr[j + 1]) {
        const tmp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = tmp;
      }
    }
  }
}
