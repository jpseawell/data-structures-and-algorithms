class HashNode {
  key;
  val;
  next;

  constructor(_key, _val, _next) {
    this.key = _key;
    this.val = _val;
    this.next = _next;
  }
}

class ExternalChainingHashMap {
  initialCapacity;
  backingArr;
  size;

  constructor(_initialCapacity = 13) {
    this.initialCapacity = _initialCapacity;
    this.backingArr = new Array(_initialCapacity);
  }

  // Public
  put(key, val) {
    const newNode = new HashNode(key, val, null);
    const index = this.#hash(key);

    this.size++;

    if (!this.backingArr[index]) {
      this.backingArr[index] = newNode;
      return;
    }

    const existingHead = this.backingArr[index];
    if (!this.#findAndReplace(key, val, existingHead)) {
      newNode.next = existingHead;
      this.backingArr[index] = newNode;
    }
  }

  // TODO:
  get(key) {}

  // TODO:
  remove(val) {}

  print() {
    console.log(this.backingArr);
  }

  get capacity() {
    return this.backingArr.length;
  }

  // Private
  #findAndReplace(key, val, head) {
    let found = false;
    let curr = head;
    while (curr.next) {
      if (curr.key === key) {
        console.log(`key found! replacing ${curr.val} with ${val}`);
        found = true;
        curr.val = val;
        break;
      }

      curr = curr.next;
    }

    return found;
  }

  #hash(key) {
    return Math.abs(key % this.backingArr.length);
  }

  // TODO: Implement resize when full
  get #full() {
    return this.capacity === this.size;
  }
}

const hashMap = new ExternalChainingHashMap();
hashMap.put(19, 19);
hashMap.put(6, 6);
hashMap.put(32, 32);
hashMap.put(8, 8);
hashMap.put(11, 11);
hashMap.put(25, 25);
hashMap.print();
