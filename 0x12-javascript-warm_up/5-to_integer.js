#!/usr/bin/node

if (isNaN(process.argv[2])) {
console.log('Not a number');
} else {
console.log('my number: ' + process.argv[2]);
}
