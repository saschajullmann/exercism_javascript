const BigInt = require('./big-integer.js');
const Grains = function() {};

Grains.prototype.square = function(num) {
  return BigInt(2).pow(num - 1).toString();
};

Grains.prototype.total = function() {
  return BigInt(2).pow(64).prev().toString();
};

module.exports = Grains;
