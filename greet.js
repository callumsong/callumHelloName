'use strict';

var exports = module.exports = {};
// var name = "derp";
exports.greet = function(name) {
  return("hello " + name);
}

console.log(exports.greet(process.argv[2]));
