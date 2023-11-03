class Node {
  data;
  next;

  constructor(data, next) {
    this.data = data;
    this.next = next;
  }
}

class SinglyLinkedList {
  head;
  tail;

  addToFront(val) {
    const newNode = new Node(val, this.head);
    this.head = newNode;
    if (!this.tail) this.tail = newNode;
  }

  addToBack(val) {
    const newNode = new Node(val, undefined);
    if (!this.head) this.head = newNode;
    if (this.tail) this.tail.next = newNode;
    this.tail = newNode;
  }

  removeFromFront() {
    if (!this.head) return;
    const removed = this.head.data;
    this.head = this.head.next;
    return removed;
  }

  removeFromBack() {
    if (!this.head) return;
    let current = this.head;
    while (current.next && current.next !== this.tail) current = current.next;

    if (this.head === this.tail) {
      this.clear();
      return current.data;
    }

    const removed = current.next.data;
    current.next = null;
    this.tail = current;

    return removed;
  }

  clear() {
    this.head = null;
    this.tail = null;
  }

  empty() {
    return !this.head && !this.tail;
  }

  print() {
    if (this.empty()) {
      console.log("head -> tail (empty)");
      return;
    }

    const result = [];
    let current = this.head;
    while (current) {
      if (current === this.head) result.push("head");
      result.push(current.data);
      if (current === this.tail) result.push("tail");
      current = current.next;
    }
    console.log(result.join(" -> "));
  }
}

// const list = new SinglyLinkedList();
// list.addToFront(3);
// list.addToFront(8);
// list.addToFront(5);
// list.addToBack(1);
// list.addToBack(14);
// list.print();

const list2 = new SinglyLinkedList();
list2.addToBack(0);
list2.addToBack(1);
list2.addToBack(2);
list2.addToBack(3);
list2.addToBack(4);
list2.removeFromFront();
list2.removeFromFront();
list2.removeFromFront();
list2.removeFromBack();
list2.removeFromBack();
list2.print();
