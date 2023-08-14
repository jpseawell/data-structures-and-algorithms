/**
 * For this assignment, you will be implementing a Queue back by an array.
 * Recall that a Queue is a first-in, first-out (FIFO) data structure;
 * the first item inserted is the first item to be removed.
 */

class ArrayQueue {
  size;
  front;
  backingArr;

  constructor(capacity) {
    this.front = 0;
    this.size = 0;
    this.backingArr = new Array(capacity);
  }

  get isEmpty() {
    return this.size === 0;
  }

  get capacity() {
    return this.backingArr.length;
  }

  get size() {
    return this.size;
  }

  dequeue() {}

  enqueue(val) {
    // TODO: check that size < capacity

    // TODO: add modulo calculations
    const index = this.mod(this.size + this.front);
    this.backingArr[index] = val;

    this.size++;
  }

  mod(val) {
    return val % this.capacity;
  }

  print() {
    console.log(this.backingArr);
  }
}

const INITIAL_CAPACITY = 5;
const q = new ArrayQueue(INITIAL_CAPACITY);
q.enqueue(1);
q.enqueue(2);
q.enqueue(3);
q.print();
