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

  it('should insert element', () => {});

  it('should delete element', () => {});

  it('should delete all elements by value', () => {});

  it('should clone list', () => {});

  it('should reverse list', () => {});

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
