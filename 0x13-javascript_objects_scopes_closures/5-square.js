#!/usr/bin/node

module.exports = class square extends require('./4-rectangle') {
  constructor (size) {
    super(size, size);
  }
};
