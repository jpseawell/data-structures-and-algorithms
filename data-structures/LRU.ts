type LRUNode<T> = {
  value: T;
  next?: LRUNode<T>;
  prev?: LRUNode<T>;
};

function createNode<V>(value: V): LRUNode<V> {
  return { value };
}

// Least Recently Used cache
export default class LRU<K, V> {
  private length: number;
  private head?: LRUNode<V>;
  private tail?: LRUNode<V>;

  private lookup: Map<K, LRUNode<V>>;
  private reverseLookup: Map<LRUNode<V>, K>;

  constructor(private capacity: number = 10) {
    this.length = 0;
    this.head = this.tail = undefined; // chained assignment 😎
    this.lookup = new Map<K, LRUNode<V>>();
    this.reverseLookup = new Map<LRUNode<V>, K>();
  }

  // There's no insert function - only update,
  // because we don't know if the value is already there or not
  update(key: K, value: V): void {
    let node = this.lookup.get(key);
    if (!node) {
      // create the node and insert it at front of list
      node = createNode(value);
      this.length++;
      this.prepend(node);

      // remove old nodes if we're at capacity
      this.trimCache();

      // update our lookups
      this.lookup.set(key, node);
      this.reverseLookup.set(node, key);
    } else {
      // update existing node and move it to front of list
      this.detach(node);
      this.prepend(node);
      node.value = value;
    }
  }

  get(key: K): V | undefined {
    // check cache for existence
    const node = this.lookup.get(key);
    if (!node) return;

    // update the value we found and move it to the front
    this.detach(node);
    this.prepend(node);

    // return out the value found or undefined if not exist
    return node.value;
  }

  private detach(node: LRUNode<V>) {
    if (node.prev) node.prev.next = node.next;
    if (node.next) node.next.prev = node.prev;

    if (this.head === node) this.head = this.head.next;
    if (this.tail === node) this.tail = this.tail.prev;

    node.next = undefined;
    node.prev = undefined;
  }

  private prepend(node: LRUNode<V>) {
    if (!this.head) {
      this.head = this.tail = node;
      return;
    }

    node.next = this.head;
    this.head.prev = node;
    this.head = node;
  }

  private trimCache(): void {
    if (this.length <= this.capacity) return;

    // detach the tail (aka Least Recently Used)
    const tail = this.tail as LRUNode<V>;
    this.detach(tail);

    // remove it from our lookups
    const key = this.reverseLookup.get(tail) as K;
    this.lookup.delete(key);
    this.reverseLookup.delete(tail);
    this.length--;
  }
}
