var Hamming = function() {};

Hamming.prototype.compute = function(string1, string2) {
  if (string1.length != string2.length) {
    throw 'DNA strands must be of equal length.'
  };
  var counter = 0;
  for (i=0; i < string1.length; i++) {
    if (string1[i] != string2[i]) {
      counter = counter + 1
    }
  };
  return counter;
};

module.exports = Hamming;
