/**
 * For this assignment, you will be implementing a Queue back by an array.
 * Recall that a Queue is a first-in, first-out (FIFO) data structure;
 * the first item inserted is the first item to be removed.
 */
const INITIAL_CAPACITY = 5;

class ArrayQueue {
  size;
  front;
  backingArr;

  constructor(capacity = INITIAL_CAPACITY) {
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

  resize() {
    const newArr = new Array(this.capacity * 2);

    for (let i = 0; i < this.size; i++)
      newArr[i] = this.backingArr[this.mod(this.front + i)];

    this.backingArr = newArr;
    this.front = 0;
  }

  dequeue() {
    if (this.isEmpty) return null;

    const result = this.backingArr[this.front];
    this.backingArr[this.front] = null;
    this.front = this.mod(this.front + 1);
    this.size--;
    return result;
  }

  enqueue(val) {
    if (this.size === this.capacity) this.resize();

    const index = this.mod(this.front + this.size);
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

const q = new ArrayQueue();
q.enqueue(0);
q.enqueue(1);
q.enqueue(2);
q.enqueue(3);
q.print();
q.dequeue();
q.print();
console.log(q.front);
