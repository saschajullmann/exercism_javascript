var BeerSong = function() {};

BeerSong.prototype.sing = function(number1, number2 = 0) {
  var mySong = '';

  for(i = number1; i >= number2; i--) {
    if(number1 >= 2) {
      mySong = mySong + this.verse(i) + '\n'
    }
    else {
      mySong = mySong + this.verse(i)
    }
  } 
  return mySong.slice(0, -1);
};

BeerSong.prototype.verse = function(number) {
  switch(number) {
    case 2:
      return `${number} bottles of beer on the wall, ${number} bottles of beer.\nTake one down and pass it around, ${number-1} bottle of beer on the wall.\n`;
      break;
    case 1:
      return `${number} bottle of beer on the wall, ${number} bottle of beer.\nTake it down and pass it around, no more bottles of beer on the wall.\n`;
      break;
    case 0:
      return `No more bottles of beer on the wall, no more bottles of beer.\nGo to the store and buy some more, 99 bottles of beer on the wall.\n`;
      break;
    default:
      return `${number} bottles of beer on the wall, ${number} bottles of beer.\nTake one down and pass it around, ${number-1} bottles of beer on the wall.\n`

  }
};

module.exports = BeerSong;
