var Isogram = function(string) {
  this.word = string;
};

Isogram.prototype.isIsogram = function() {
  var myWord = this.word.replace(/[-\s]/g, "").toLowerCase();
  var myDic = {};
  for(i=0; i < myWord.length; i++) {
    if (myWord[i] in myDic) {
      return false
    }
    else {
      myDic[myWord[i]] = 1
    }
  };
  return true
};

module.exports = Isogram;
