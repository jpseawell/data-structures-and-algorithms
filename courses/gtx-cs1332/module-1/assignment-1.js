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

  shiftRight() {
    for (let i = this.count - 1; i >= 0; i--)
      if (this.backingArray[i]) this.backingArray[i + 1] = this.backingArray[i];
  }

  addToFront(val) {
    if (this.isFull) this.resize();
    this.count++;
    this.shiftRight();
    this.backingArray[0] = val;
  }

  addToBack(val) {
    if (this.isFull) this.resize();
    this.count++;
    this.backingArray[this.count - 1] = val;
  }

  // TODO: Implement remove front/back
}

const INITIAL_CAPACITY = 9;
const list = new ArrayList(INITIAL_CAPACITY);

list.addToFront(3);
list.addToFront(8);
list.addToFront(5);
list.addToBack(1);
list.addToBack(14);
list.addToBack(0);
list.addToBack(0);
list.addToBack(0);
list.addToBack(0);
console.log("before:", list.backingArray);
list.addToBack(0);
console.log("after:", list.backingArray);
