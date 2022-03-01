'use strict';

const assert = require('assert').strict;
const List = require('../lib/list');

describe('Doubly Linked List', () => {
  it('should append element', () => {
    const list = new List();
    list.append('1');
    list.append('2');

    const actual = list.tail.data;
    const expected = '2';
    const err = 'Append method addes wrong data';
    assert.deepStrictEqual(actual, expected, err);
  });

  it('should insert element', () => {
    const list = new List();
    list.append('1'); // 0
    list.append('3'); // 1

    list.insert('2', 1);

    const actual = list.head.next.data;
    const expected = '2';
    const err = 'Insert method addes data at wrong position';
    assert.deepStrictEqual(actual, expected, err);
  });

  it('should delete element', () => {
    const list = new List();
    list.append('1'); // 0
    list.append('2'); // 1

    list.delete(1);

    const actual = list.tail.data;
    const expected = '1';
    const err = 'Delete method removes wrong elements';
    assert.deepStrictEqual(actual, expected, err);
  });

  it('should delete all elements by value', () => {
    const list = new List();
    list.append('1');
    list.append('2');
    list.append('2');

    list.deleteAll('2');

    const actual = list.tail.data;
    const expected = '1';
    const err = 'DeleteAll method removes wrong elements';
    assert.deepStrictEqual(actual, expected, err);
  });

  it('should clone list', () => {
    const list = new List();
    list.append('1');
    list.append('2');

    const cloned = list.clone();
    {
      const actual = cloned.tail.data;
      const expected = '2';
      const err = 'Clone method clones wrong elements';
      assert.deepStrictEqual(actual, expected, err);
    }

    // Removing element from primary list
    list.delete(0);
    {
      const actual = cloned.length;
      const expected = 2;
      const err = 'Primary list changes affect cloned list';
      assert.deepStrictEqual(actual, expected, err);
    }
  });

  it('should reverse list', () => {
    const list = new List();
    list.append('1');
    list.append('2');
    list.append('3');

    list.reverse();

    const testLoop = ['3', '2', '1'];
    const err = 'Reverse works wrongly';
    let tempNode = list.head;
    let i = 0;
    while (tempNode !== null) {
      const actual = tempNode.data;
      const expected = testLoop[i];
      assert.deepStrictEqual(actual, expected, err);
      tempNode = tempNode.next;
      i += 1;
    }
  });

  it('should clear whole list', () => {});

  it('should extend list by another one', () => {});

  it('should return element by id ', () => {
    const list = new List();
    list.append('1'); // 0

    const actual = list.get(0);
    const expected = '1';
    const err = 'Get method returns wrong data';
    assert.deepStrictEqual(actual, expected, err);
  });

  it('should return list length', () => {
    const list = new List();
    list.append('1');
    list.append('2');
    list.append('3');

    const actual = list.length;
    const expected = 3;
    const err = 'Lenght getter method works wrongly';
    assert.deepStrictEqual(actual, expected, err);
  });

  it('should return first element by value', () => {});

  it('should return last element by value', () => {});
});
