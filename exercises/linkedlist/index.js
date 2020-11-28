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
    this.insertAt(data, 0);
  }

  size() {
    if (!this.head) return 0;

    let count = 0,
      node = this.head;
    while (node) {
      count++;
      node = node.next;
    }
    return count;
  }

  getFirst() {
    return this.getAt(0);
  }

  getLast() {
    return this.getAt(this.size() - 1);
    // if (!this.head) return null;

    // let node = this.head;
    // while (node.next) {
    //   node = node.next;
    // }
    // return node;
  }

  clear() {
    this.head = null;
  }

  removeFirst() {
    this.removeAt(0);
  }

  removeLast() {
    this.removeAt(this.size() - 1);
    // if (!this.head) return;
    // if (!this.head.next) {
    //   this.head = null;
    //   return;
    // }

    // let prev = this.head;
    // let node = prev.next;
    // while (node.next) {
    //   prev = node;
    //   node = node.next;
    // }
    // prev.next = null;
  }

  insertLast(data) {
    this.insertAt(data, this.size());
    // const last = this.getLast();
    // if (last) last.next = new Node(data);
    // else this.insertFirst(data);
  }

  getAt(index) {
    let node = this.head;
    while (node && index--) {
      node = node.next;
    }
    return node;
  }

  removeAt(index) {
    if (!this.head) return;
    if (index === 0) {
      this.head = this.head.next;
    } else {
      const prevNode = this.getAt(index - 1);
      if (prevNode && prevNode.next) prevNode.next = prevNode.next.next;
    }
  }

  insertAt(data, index) {
    if (index === 0) {
      this.head = new Node(data, this.head);
    } else {
      const prevNode = this.getAt(index - 1) || this.getLast();
      prevNode.next = new Node(data, prevNode.next);
    }
  }

  forEach(fn) {
    let node = this.head;
    let counter = 0;
    while (node) {
      fn(node, counter++);
      node = node.next;
    }
  }

  *[Symbol.iterator]() {
    let node = this.head;
    while (node) {
      yield node;
      node = node.next;
    }
  }
}

module.exports = { Node, LinkedList };
