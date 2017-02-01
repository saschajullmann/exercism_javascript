var Anagram = function(myWord) {
  this.hans = myWord;
};

Anagram.prototype.matches = function(...arguments) {
  var isAnagram = [];
  if(typeof arguments[0] === 'string') {
    var matchArray = arguments
  }
  else {
    var matchArray = arguments[0]
  }
  matchArray.forEach(function(element) {
    var myWord = this.hans;
    if(myWord.toLowerCase() == element.toLowerCase()) {
    }
    else {
      if(myWord.length === element.length) {
        for(i = 0; i < element.length; i++) {
          if(myWord.toLowerCase().includes(element[i].toLowerCase())) {
            myWord = myWord.toLowerCase().replace(element[i].toLowerCase(), '')
          }
        }
        if(myWord === '') {
          isAnagram.push(element)
        }
      }
    }
  }, this);
  return isAnagram
};

module.exports = Anagram;
