var FoodChain = function() {};

const song = {
	intro : "I know an old lady who swallowed ",
	animals : [ "",
			  "a fly.\n",
			  "a spider.\nIt wriggled and jiggled and tickled inside her.\n",
			  "a bird.\nHow absurd to swallow a bird!\n",
			  "a cat.\nImagine that, to swallow a cat!\n",
			  "a dog.\nWhat a hog, to swallow a dog!\n",
			  "a goat.\nJust opened her throat and swallowed a goat!\n",
			  "a cow.\nI don't know how she swallowed a cow!\n",
			  "a horse.\nShe's dead, of course!\n",
			],
	outro : ["I don't know why she swallowed the fly. Perhaps she'll die.\n",
			  "She swallowed the spider to catch the fly.\n",
			  "She swallowed the bird to catch the spider that wriggled and jiggled and tickled inside her.\n",
			  "She swallowed the cat to catch the bird.\n",
			  "She swallowed the dog to catch the cat.\n",
			  "She swallowed the goat to catch the dog.\n",
			  "She swallowed the cow to catch the goat.\n",
			 ],
};


FoodChain.prototype.verse = function(num) {
  const verse = song.intro + song.animals[num]

  if (num === 8) { return verse };
  
  return verse + song.outro.slice(0, num).reverse().join('');
};

FoodChain.prototype.verses = function(start, stop) {
  const myString = [];
  for (let i = start; i <= stop; i++) {
    myString.push(this.verse(i) + '\n');
  };
  return myString.join('');
}

module.exports = FoodChain;
