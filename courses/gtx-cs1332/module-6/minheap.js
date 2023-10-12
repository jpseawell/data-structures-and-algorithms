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

  print() {
    console.log(this.backingArr);
  }

  add(newVal) {
    if (isNaN(newVal)) throw new Error("added value is NaN");

    const insertedAtIndex = this.backingArr.push(newVal) - 1;
    this.upheap(insertedAtIndex);
    this.size++;
  }

  /**
   * A recursive function that compares a child node's value
   * to it's parents value and swaps them until the min value
   * is as high up the tree as possible.
   * @param {number} childIndex
   * @returns
   */
  upheap(childIndex) {
    if (isNaN(childIndex)) throw new Error("child index is NaN");

    const childVal = this.backingArr[childIndex];
    const parentIndex = Math.floor(this.parentIndex(childIndex));
    const parentVal = this.backingArr[parentIndex];

    if (childVal >= parentVal) return;

    // swap
    this.backingArr[childIndex] = parentVal;
    this.backingArr[parentIndex] = childVal;

    this.upheap(parentIndex);
  }

  remove() {
    const removed = this.backingArr[1];
    this.backingArr[1] = this.backingArr.pop();
    this.size--;

    this.downheap(1);

    return removed;
  }

  // TODO: WIP
  downheap(parentIndex) {
    if (isNaN(parentIndex))
      throw new Error(`parent index: ${parentIndex} is NaN`);

    const lci = this.leftChildIndex(parentIndex);
    const rci = this.rightChildIndex(parentIndex);

    const smallerChildIndex =
      this.backingArr[lci] < this.backingArr[rci] ? lci : rci;
    const smallerChildVal = this.backingArr[smallerChildIndex];
    const parentVal = this.backingArr[parentIndex];

    if (parentVal <= smallerChildVal) return;

    this.backingArr[parentIndex] = smallerChildVal;
    this.backingArr[smallerChildIndex] = parentVal;

    this.downheap(smallerChildIndex);
  }

  parentIndex(n) {
    return n / 2;
  }

  leftChildIndex(n) {
    return this.backingArr[2 * n];
  }

  rightChildIndex(n) {
    return this.backingArr[2 * n + 1];
  }
}

const heap = new MinHeap([null, 0, 1, 2, 4, 3, 5, 7, 6, 8, 9, 10]);
heap.remove();
// heap.add(0);
heap.print();
