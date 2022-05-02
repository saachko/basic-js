const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement chainMaker object according to task description
 * 
 */

// NOT solved...
const chainMaker = {
  values: [],

  getLength() {
    return this.values.length;
  },

  addLink(value) {
    let n;

    if (value === undefined) {
      n = '';
    } else {
      n = value;
    }

    this.values.push(n);

    return this;
  },

// ONLY the Error works correctly
  removeLink(position) {
    if (typeof position !== 'number' || position % 1 !== 0 || position > this.values.length || position < 1) {
      this.values = [];
      throw new Error("You can't remove incorrect link!");
    }

    this.values = this.values.filter( (item, i) => i != position - 1);

    return this;
  },

  reverseChain() {
    this.values = this.values.reverse();

    return this;
  },

  finishChain() {
    let result = '';

    for (let i = 0; i < this.values.lenght; i++) {
      if (i === 0) {
        result += `( ${this.values[i]} )`;
      } else {
        result += `~~( ${this.values[i]} )`;
      }
    }

    this.values = [];
    return result;
  }
};

module.exports = {
  chainMaker
};
