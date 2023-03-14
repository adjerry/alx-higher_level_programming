#!/usr/bin/node

const Rectangle = require('./5-square');
module exports = class square extends square {
constructor (size) {
super(size, size);
}
charprint (c) {
const char = c || 'x';
for (let i = 0; i < this.height; i++) {
console.log(char.repeat(this.width));
}
}
};
