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
  append(data) {}

  // Paste element into certain position
  insert(data, idx) {}

  // Delete element by id
  delete(idx) {}

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
