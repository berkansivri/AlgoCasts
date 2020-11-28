// --- Directions
// Implement classes Node and Linked Lists
// See 'directions' document

class Node {
  constructor(data, next = null) {
    this.data = data;
    this.next = next;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
  }

  insertFirst(data) {
    const node = new Node(data, this.head);
    this.head = node;
  }

  size() {
    if (!this.head) return 0;

    let count = 0,
      temp = this.head;
    while (temp) {
      count++;
      temp = temp.next;
    }
    return count;
  }

  getFirst() {
    return this.head;
  }

  getLast() {
    if (!this.head) return null;

    let temp = this.head;
    while (temp.next) {
      temp = temp.next;
    }
    return temp;
  }

  clear() {
    this.head = null;
  }

  removeFirst() {
    this.head = this.head.next;
  }

  removeLast() {
    if (!this.head) return;
    if (!this.head.next) {
      this.head = null;
      return;
    }
    let temp = this.head;
    while (temp.next.next) {
      temp = temp.next;
    }
    temp.next = null;
  }

  insertLast(data) {
    const last = this.getLast();
    if (last) last.next = new Node(data);
    else this.head = new Node(data);
  }

  getAt(index) {
    if (!this.head) return null;
    let i = index,
      temp = this.head;
    while (temp && i) {
      temp = temp.next;
      i--;
    }
    return temp;
  }

  removeAt(index) {
    if (index === 0) {
      if (this.head) this.head = this.head.next;
    } else {
      const temp = this.getAt(index - 1);
      if (temp && temp.next) temp.next = temp.next.next;
    }
  }

  insertAt(data, index) {
    if (index === 0) {
      this.head = new Node(data, this.head);
    } else if (index <= this.size()) {
      const prevNode = this.getAt(index - 1);
      if (prevNode) {
        const newNode = new Node(data, prevNode.next);
        prevNode.next = newNode;
      } else {
        this.head = new Node(data);
      }
    } else {
      this.insertLast(data);
    }
  }

  forEach(fn) {
    let temp = this.head;
    while (temp.next) {
      fn(temp);
      temp = temp.next;
    }
    fn(temp);
  }
}

module.exports = { Node, LinkedList };

const l = new LinkedList();
l.insertLast("a");
l.insertLast("b");
l.insertAt("hi", 30);

l.getAt(0).data; // a
l.getAt(1).data; // b
l.getAt(2).data; // hi
