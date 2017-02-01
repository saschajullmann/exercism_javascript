var Words = function() {};

Words.prototype.count = function(string) {
  var noPunct = string.replace(/[.,!&?¡:¿@$%\^\n\t]/g," ");
  var noEmpty = noPunct.replace(/\s{2,}/g," ");
  var trim = noEmpty.trim();
  var lower = trim.toLowerCase();
  var newArray = lower.split(" ");
  var wordArray = checkQuotes(newArray)
  var myDic = Object.create(null);
  for(i=0; i < wordArray.length; i++) {
    if (wordArray[i] in myDic) {
      myDic[wordArray[i]] += 1
    }
    else {
      myDic[wordArray[i]] = 1
    }
  }
  return myDic;
};

function checkQuotes(array) {
  for(i=0; i < array.length; i++) {
    if (/^'.*'$/.test(array[i])) {
      array[i] = array[i].replace(/\'/g,"");
    }
  };
  return array;
};

module.exports = Words;
