'use strict';

const Node = require('./node');

class List {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  // Amount of element in the list
  length() {
    return this.length;
  }

  // Add element to end
  append(data) {
    this.length += 1;
    const node = new Node(data);
    const isEmpty = !this.head;
    if (isEmpty) {
      this.head = node;
      this.tail = node;
      return node;
    }
    node.prev = this.tail;
    this.tail.next = node;
    this.tail = node;
    return node;
  }

  // Paste element into certain position
  insert(data, idx) {
    const node = new Node(data);
    this.length += 1;
    if (idx === 0) {
      node.next = this.head;
      this.head.prev = node;
      this.head = node;
      return node;
    }
    // left <-> node <-> right
    const right = this.get(idx);
    const left = right.prev;
    node.prev = left;
    node.next = right;
    left.next = node;
    right.prev = node;
    return node;
  }

  // Delete element by id
  delete(idx) {
    const tempNode = this.get(idx);
    const prevNode = tempNode.prev;
    const nextNode = tempNode.next;
    this.length -= 1;
    if (!prevNode && !nextNode) {
      this.clear();
      return tempNode.data;
    }
    if (!nextNode) {
      prevNode.next = null;
      this.tail = prevNode;
    }
    if (!prevNode) {
      nextNode.prev = null;
      this.head = nextNode;
    }
    if (prevNode && nextNode) {
      prevNode.next = nextNode;
      nextNode.prev = prevNode;
    }
    return tempNode.data;
  }

  // Delete elements by data
  deleteAll(data) {}

  // Get element by id
  get(idx) {
    if (idx < 0 || idx >= this.length)
      throw new Error(
        'Index must be greater than or equal to 0 or less than list length'
      );
    let tempNode = this.head;
    for (let i = 0; i < idx; i += 1) tempNode = tempNode.next;
    return tempNode;
  }

  // Reverse whole list
  reverse() {}

  // Get head element
  findFirst() {
    return this.head;
  }

  // Get tail element
  findLast() {
    return this.tail;
  }

  // Clear whole list
  clear() {
    this.head = null;
    this.tail = null;
    this.length = 0;
    return this;
  }

  // Extend existing list with another one
  extend(list) {}

  clone() {}
}

module.exports = List;
