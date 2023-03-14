#!/usr/bin/node

exports.nbOccurences = function (list, searchElement){
return list.reduce(( count, item) =>
(item === searchElemnt ? count + 1 : count), 0);
};
