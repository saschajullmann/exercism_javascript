var Pangram = function(myText) {
  this.myText = myText;
};

Pangram.prototype.isPangram = function() {
  var alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
  var newString = this.myText.replace(/\s/g, "").toLowerCase();
  for(i=0; i < newString.length; i++) {
    var myIndex = alphabet.indexOf(newString[i]);
    if(myIndex > -1) {
      alphabet.splice(myIndex, 1)
    }
  } 
  if(alphabet.length === 0) {
    return true
  } 
  else {
    return false
  }
};

module.exports = Pangram;
