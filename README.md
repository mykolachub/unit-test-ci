# Unit tesing and CI

The aim of this project is to show the basics of unit testing and GitHub powered continuous integration by the example of `doubly linked list`.

## Installation

This project uses Node.js under the hood. Install using the following command:

Firstly, clone this repository

```
$ git clone https://github.com/nikolaichub/unit-test-ci.git
```

Go to project folder

```
$ cd unit-test-ci
```

Install all necessary dependencies

```
$ npm install
```

## Usage

### Testing

As this project is all about testing, here's all you need to do.

```
$ npm test
```

## Example

I am using [Mocha](https://www.npmjs.com/package/mocha) framework for clear results output. All the tests are covered by built-in Node.js `assert` library.

### Success

Every test is passed

```
$ npm test

> mocha tests

  Doubly Linked List
    ✔ should append element
    ✔ should insert element
    ✔ should delete element
    ✔ should delete all elements by value
    ✔ should clone list
    ✔ should reverse list
    ✔ should clear whole list
    ✔ should extend list by another one
    ✔ should return element by id
    ✔ should return list length
    ✔ should return first element by value
    ✔ should return last element by value


  12 passing (13ms)
```

### Fail

Some tests failed

```
> mocha tests

  Doubly Linked List
    1) should append element
    ✔ should insert element
    ✔ should delete element
    ✔ should delete all elements by value
    ✔ should clone list
    ✔ should reverse list
    ✔ should clear whole list
    ✔ should extend list by another one
    ✔ should return element by id
    ✔ should return list length
    ✔ should return first element by value
    ✔ should return last element by value

  11 passing (13ms)
  1 failing

  1) Doubly Linked List
       should append element:

      AssertionError [ERR_ASSERTION]: Append method addes wrong data
      + expected - actual

      -2
      +1
```

### CI fall

Here is an example of CI fall

Link: [e103bfbcb0c12a5170ebe3ab490791c53339df3f](https://github.com/nikolaichub/unit-test-ci/commit/e103bfbcb0c12a5170ebe3ab490791c53339df3f)
