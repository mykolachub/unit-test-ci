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
  get(idx) {}

  // Reverse whole list
  reverse() {}

  // Get head element
  findFirst() {
    return this.head;
  }

  // Get tail element
  findLast() {}

  // Clear whole list
  clear() {}

  // Extend existing list with another one
  extend(list) {}

  clone() {}
}

module.exports = List;
