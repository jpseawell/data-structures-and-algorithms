class Node {
  data;
  next;

  constructor(data, next) {
    this.data = data;
    this.next = next;
  }
}

class LinkedList {
  head;
  size = 0;

  addToFront(data) {
    const newNode = new Node(data, this.head);
    this.head = newNode;
    this.size++;
  }

  print() {
    let current = this.head;
    while (current) {
      console.log("node:", current.data);
      current = current.next;
    }
  }

  removeDuplicates() {
    this.head = this.#rRemove(this.head);
  }

  // Given solution
  #rRemove(curr) {
    if (curr == null) return null;
    curr.next = this.#rRemove(curr.next);
    if (curr.next != null && curr.data === curr.next.data) return curr.next;
    return curr;
  }
}

const list = new LinkedList();
list.addToFront(3);
list.addToFront(3);
list.addToFront(3);
list.addToFront(3);
list.addToFront(2);
list.addToFront(2);
list.addToFront(2);
list.addToFront(2);
list.addToFront(2);
list.addToFront(1);
list.addToFront(1);

// My solution
function removeDup(list, current) {
  if (!current) current = list.head;
  while (current.data === current?.next?.data) current.next = current.next.next;
  if (current.next) removeDup(list, current.next);
}

removeDup(list);
// list.removeDuplicates();
list.print();
