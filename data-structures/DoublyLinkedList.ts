interface LinkedList<T> {
  get length(): number;
  insertAt(item: T, index: number): void;
  remove(item: T): T | undefined;
  removeAt(index: number): T | undefined;
  append(item: T): void;
  prepend(item: T): void;
  get(index: number): T | undefined;
}

type ListNode<T> = {
  value: T;
  prev?: ListNode<T>;
  next?: ListNode<T>;
};

export default class DoublyLinkedList<T> implements LinkedList<T> {
  public length: number;
  private head?: ListNode<T>;
  private tail?: ListNode<T>;

  constructor() {
    this.length = 0;
  }

  private indexOutOfBounds(index: number): boolean {
    return index < 0 || index >= this.length;
  }

  private getAt(index: number): ListNode<T> | undefined {
    let curr: ListNode<T> | undefined = this.head;
    for (let i = 0; i < index; i++) {
      curr = curr?.next;
    }
    return curr;
  }

  private removeNode(node: ListNode<T>): T | undefined {
    this.length--;

    const val = node?.value;

    if (node === this.head) this.head = node.next;
    if (node === this.tail) this.tail = node.prev;

    if (node?.prev) node.prev.next = node.next;
    if (node?.next) node.next.prev = node.prev;
    node.prev = node.next = undefined;

    return val;
  }

  insertAt(item: T, index: number): void {
    if (this.indexOutOfBounds(index)) return;

    const newNode: ListNode<T> = {
      value: item,
    };

    const curr = this.getAt(index);

    newNode.next = curr;
    newNode.prev = curr?.prev;
    if (curr?.prev?.next) curr.prev.next = newNode;
    if (curr) curr.prev = newNode;

    this.length++;
  }

  remove(item: T): T | undefined {
    let curr = this.head;
    while (curr) {
      if (curr.value === item) return this.removeNode(curr);
      curr = curr.next;
    }
  }

  removeAt(index: number): T | undefined {
    if (this.indexOutOfBounds(index)) return;

    let curr = this.getAt(index);
    if (!curr) return;

    return this.removeNode(curr);
  }

  append(item: T): void {
    const newNode: ListNode<T> = {
      value: item,
      prev: this.tail,
    };

    if (!this.head) this.head = newNode;
    if (this.tail) this.tail.next = newNode;
    this.tail = newNode;
    this.length++;
  }

  prepend(item: T): void {
    const newNode: ListNode<T> = {
      value: item,
      next: this.head,
    };

    if (this.head) this.head.prev = newNode;
    else this.tail = newNode;

    this.head = newNode;
    this.length++;
  }

  get(index: number): T | undefined {
    return this.getAt(index)?.value;
  }

  print() {
    let curr: ListNode<T> | undefined = this.head;
    const list: T[] = [];

    while (curr) {
      list.push(curr.value);
      curr = curr.next;
    }

    console.log(list);
  }
}

const numList = new DoublyLinkedList<number>();
// numList.prepend(4);
numList.prepend(5);
// numList.prepend(2);
// numList.prepend(1);
// numList.prepend(0);
// numList.insertAt(3, 3);
numList.append(77);
numList.append(4949);
numList.print();
numList.remove(5);
numList.remove(77);
numList.remove(4949);
numList.get(2);
