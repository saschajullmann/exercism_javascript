const Robot = function() {
  this.name = generateName();
};

Robot.prototype.reset = function() {
  this.name = generateName();
};

const usedNames = new Set();

function generateName() {
  const abc = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  let name = '';
  
  function generateNumber(min, max) {
    min = Math.ceil(min);
    max = Math.ceil(max);
    return Math.floor(Math.random() * (max - min + 1) + min)
  }; 

  do {
    for (i = 0; i < 2; i++) {
      const randomNumber = generateNumber(1, 9);
      name += abc[randomNumber];
    };
    const randomNumber = generateNumber(100, 999);
    name += randomNumber;
  } while( usedNames.has(name) );

  usedNames.add(name);
  return name;

};

module.exports = Robot;
