#!/usr/bin/node

const fs = require('fs');
const fileA = fs.readFilesync(process.argv[2], 'utf8');
const fileB = fs.readFilesync(process.argv[3], 'utf8');
fs.writeFilesync(process.argv[4], fileA + fileB);
