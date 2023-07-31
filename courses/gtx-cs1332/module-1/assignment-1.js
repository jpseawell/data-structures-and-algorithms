class ArrayList {
  backingArray;
  count; // number of items in the list

  constructor(capacity) {
    this.count = 0;
    this.backingArray = new Array(capacity);
  }

  resize() {
    let newArr = new Array(this.capacity * 2);
    this.copyTo(newArr);
    this.backingArray = newArr;
  }

  copyTo(newArr) {
    for (let i = 0; i < this.count; i++) newArr[i] = this.backingArray[i];
  }

  get capacity() {
    return this.backingArray.length;
  }

  get isFull() {
    return this.capacity === this.count;
  }

  get isEmpty() {
    return this.count === 0;
  }

  shiftRight() {
    for (let i = this.count - 1; i >= 0; i--)
      if (this.backingArray[i]) this.backingArray[i + 1] = this.backingArray[i];
  }

  validate(value) {
    if (value == null || value === undefined)
      throw new Error("Value is null or undefined");
  }

  addToFront(val) {
    this.validate(val);
    if (this.isFull) this.resize();
    this.count++;
    this.shiftRight();
    this.backingArray[0] = val;
  }

  addToBack(val) {
    this.validate(val);
    if (this.isFull) this.resize();
    this.count++;
    this.backingArray[this.count - 1] = val;
  }

  shiftLeft() {
    for (let i = 0; i <= this.count; i++)
      this.backingArray[i] = this.backingArray[i + 1];
  }

  removeFromFront() {
    if (this.isEmpty) return null;
    this.count--;
    const first = this.backingArray[0];
    this.shiftLeft();
    return first;
  }

  removeFromBack() {
    if (this.isEmpty) return null;
    this.count--;
    const last = this.backingArray[this.count];
    this.backingArray[this.count] = undefined;
    return last;
  }
}

const INITIAL_CAPACITY = 9;
const list = new ArrayList(INITIAL_CAPACITY);

list.addToBack(0);
list.addToBack(1);
list.addToBack(2);
list.addToBack(3);
list.addToBack(4);
list.addToBack(5);
list.addToBack(6);
list.addToBack(7);
list.addToBack(8);

console.log(list.backingArray);

list.removeFromFront();
list.removeFromFront();
list.removeFromFront();
list.removeFromBack();
list.removeFromBack();

console.log(list.backingArray);
