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
  backingArr;
  size = 0;
  loadFactor = 0.6;

  constructor(_initialCapacity = 13) {
    this.backingArr = new Array(_initialCapacity);
  }

  // Public
  put(key, val) {
    const newNode = new HashNode(key, val, null);
    const index = this.#hash(key);
    this.size++;

    if (this.#full) this.#resize();
    this.#insert(index, newNode, this.backingArr);
  }

  // TODO:
  get(key) {
    const index = this.#hash(key);
    if (!this.backingArr[index]) return null;

    const existingHead = this.backingArr[index];
    let curr = existingHead;
    while (curr) {
      if (curr.key === key) return curr.val;

      curr = curr.next;
    }
  }

  // TODO:
  remove(val) {}

  print() {
    console.log(this.backingArr);
  }

  get capacity() {
    return this.backingArr.length;
  }

  // Private
  #insert(index, newNode, arr) {
    if (!arr[index]) {
      arr[index] = newNode;
      return;
    }

    const existingHead = arr[index];
    if (!this.#findAndReplace(newNode.key, newNode.val, existingHead)) {
      newNode.next = existingHead;
      arr[index] = newNode;
    }
  }

  #resize() {
    console.log("resizing...");
    const oldArr = this.backingArr;

    this.backingArr = new Array(this.backingArr.length * 2 + 1);

    let curr;
    for (let el of oldArr) {
      curr = el;
      while (curr) {
        this.#insert(this.#hash(curr.key), curr, this.backingArr);
        curr = curr.next;
      }
    }
  }

  #findAndReplace(key, val, head) {
    let found = false;
    let curr = head;
    while (curr) {
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

  get #full() {
    return this.size / this.backingArr.length > this.loadFactor;
  }
}

const hashMap = new ExternalChainingHashMap(6);
hashMap.put(32, 32);
hashMap.put(19, 19);
hashMap.put(6, 6);
hashMap.put(8, 8);
hashMap.put(11, 11);
hashMap.put(25, 25);
hashMap.print();
console.log(hashMap.get(6));
