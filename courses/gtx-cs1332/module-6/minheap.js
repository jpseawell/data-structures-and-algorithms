/**
 * For this assignment, you will be coding a MinHeap that is backed by an array of contiguous elements.
 *
 * Implementation Details:
 *
 * Although heaps are usually classified as a type of tree, they are commonly implemented using an array
 * due to their completeness. In your implementation, you should leave index 0 empty and begin your heap
 * at index 1. This will make the arithmetic for finding parent and children indices simpler.
 *
 * When resizing your backingArray, double the current capacity. Therefore, if the initial capacity is
 * 13, the first resize should bring the total backingArray capacity to 26. Note that this includes
 * the 0th index!
 */

class MinHeap {
  backingArr;
  size;
  capacity = 12;

  constructor(initialArr = []) {
    this.backingArr = [...initialArr];
    this.size = initialArr.length;
  }

  /// PUBLIC

  print() {
    console.log(this.backingArr);
  }

  /**
   * Adds a new number to the Heap
   * @param {number} newVal
   */
  add(newVal) {
    if (isNaN(newVal)) throw new Error("added value is NaN");

    const insertedAtIndex = this.backingArr.push(newVal) - 1;
    this.#upheap(insertedAtIndex);
    this.size++;
  }

  get empty() {
    this.size === 0;
  }

  /**
   * Removes a number from the heap and returns it
   * @returns {number} the removed number
   */
  remove() {
    if (this.empty) throw new Error("Heap is empty.");

    const removed = this.backingArr[1];
    this.backingArr[1] = this.backingArr.pop();
    this.size--;
    this.#downheap(1);
    return removed;
  }

  /// PRIVATE

  /**
   * A recursive function that compares a child node's value
   * to it's parent's value and swaps them until the min value
   * is as high up the tree as possible.
   * @param {number} childIndex
   * @returns
   */
  #upheap(childIndex) {
    if (isNaN(childIndex)) throw new Error("child index is NaN");

    const childVal = this.backingArr[childIndex];
    const parentIndex = Math.floor(this.#parentIndex(childIndex));
    const parentVal = this.backingArr[parentIndex];

    if (childVal >= parentVal) return;

    // swap
    this.backingArr[childIndex] = parentVal;
    this.backingArr[parentIndex] = childVal;

    this.#upheap(parentIndex);
  }

  /**
   * A recursive function that compares a parent node's value
   * to it's children's value and swaps them until the larger
   * value is as low on the tree as possible.
   * @param {number} parentIndex
   * @returns
   */
  #downheap(parentIndex) {
    if (isNaN(parentIndex))
      throw new Error(`parent index: ${parentIndex} is NaN`);

    const smallerChildIndex = this.#smallerChildIndex(parentIndex);
    if (isNaN(smallerChildIndex)) return; // no children

    const smallerChildVal = this.backingArr[smallerChildIndex];
    const parentVal = this.backingArr[parentIndex];
    if (parentVal <= smallerChildVal) return;

    // swap
    this.backingArr[parentIndex] = smallerChildVal;
    this.backingArr[smallerChildIndex] = parentVal;

    this.#downheap(smallerChildIndex);
  }

  /**
   *
   * @param {number} n
   * @returns
   */
  #smallerChildIndex(n) {
    const lcIndex = this.#leftChildIndex(n);
    const rcIndex = this.#rightChildIndex(n);
    const lcVal = this.backingArr[lcIndex];
    const rcVal = this.backingArr[rcIndex];

    if (!lcVal) return; // no children
    if (!rcVal) return lcIndex;
    return lcVal < rcVal ? lcIndex : rcIndex;
  }

  #parentIndex(n) {
    return n / 2;
  }

  #leftChildIndex(n) {
    return 2 * n;
  }

  #rightChildIndex(n) {
    return this.#leftChildIndex(n) + 1;
  }
}

// Add example
const heap1 = new MinHeap([null, 1, 2, 3, 4, 5, 6, 7, 8, 9]);
heap1.add(0);
console.log("Add:");
heap1.print();

// Remove example
const heap2 = new MinHeap([null, 0, 1, 2, 4, 3, 5, 7, 6, 8, 9, 10]);
heap1.remove();
console.log("Remove:");
heap1.print();
