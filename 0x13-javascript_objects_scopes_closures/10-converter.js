#!/usr/bin/node

exports.converter = function (base) {
return (res) => res.tostring(base);
};
