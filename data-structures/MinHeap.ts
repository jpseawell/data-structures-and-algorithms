// Also called "Priority Queue"
export default class MinHeap {
  public length: number;
  private data: number[];

  constructor() {
    this.data = [];
    this.length = 0;
  }

  // O(log n)
  insert(value: number): void {
    this.data[this.length] = value;
    this.heapifyUp(this.length);
    this.length++;
  }

  // O(log n)
  // Can also be called "Pull" or "Pop"
  delete(): number | undefined {
    if (this.length === 0) return;

    const out = this.data[0];
    this.length--;

    if (this.length === 0) {
      this.data = [];
      return out;
    }

    this.data[0] = this.data[this.length]; // set LAST element to FIRST position
    this.heapifyDown(0);

    return out;
  }

  private heapifyDown(idx: number): void {
    if (idx >= this.length) return;

    const lIdx = this.leftChild(idx);
    const rIdx = this.rightChild(idx);

    if (lIdx >= this.length) return; // we don't have any children

    const val = this.data[idx];
    const lVal = this.data[lIdx];
    const rVal = this.data[rIdx];

    if (lVal > rVal && val > rVal) {
      /**
       * Ex: right child is smaller, and our current val is larger
       *
       *       7
       *    5     3
       */

      this.data[idx] = rVal;
      this.data[rIdx] = val;
      this.heapifyDown(rIdx);
    } else if (rVal > lVal && val > lVal) {
      /**
       * Ex: left child is smaller, and our current val is larger
       *
       *       7
       *    3     5
       */

      this.data[idx] = lVal;
      this.data[lIdx] = val;
      this.heapifyDown(lIdx);
    }
  }

  private heapifyUp(idx: number): void {
    if (idx === 0) return;

    const parent = this.parent(idx);
    const parentVal = this.data[parent];
    const val = this.data[idx];

    if (parentVal > val) {
      this.data[idx] = parentVal;
      this.data[parent] = val;
      this.heapifyUp(parent);
    }
  }

  private parent(idx: number): number {
    return Math.floor((idx - 1) / 2);
  }

  private leftChild(idx: number): number {
    return idx * 2 + 1;
  }

  private rightChild(idx: number): number {
    return idx * 2 + 2;
  }
}
