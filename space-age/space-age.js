const SpaceAge = function(seconds) {
  this.seconds = seconds;
};

const calc = {
};

function calcEarth(seconds) {
  const num = seconds / 31557600; 
  return num;
};

SpaceAge.prototype.seconds = function() {
  return this.seconds;
};

SpaceAge.prototype.onEarth = function() {
  const num = calcEarth(this.seconds); 
  return Number(num.toFixed(2));
};

SpaceAge.prototype.onMercury = function() {
  const num = calcEarth(this.seconds) / 0.2408467;
  return Number(num.toFixed(2)); 
};

SpaceAge.prototype.onVenus = function() {
  const num = calcEarth(this.seconds) / 0.61519726;
  return Number(num.toFixed(2)); 
};

SpaceAge.prototype.onMars = function() {
  const num = calcEarth(this.seconds) / 1.8808158;
  return Number(num.toFixed(2)); 
};

SpaceAge.prototype.onJupiter = function() {
  const num = calcEarth(this.seconds) / 11.862615;
  return Number(num.toFixed(2)); 
};

SpaceAge.prototype.onSaturn = function() {
  const num = calcEarth(this.seconds) / 29.447498;
  return Number(num.toFixed(2)); 
};

SpaceAge.prototype.onUranus = function() {
  const num = calcEarth(this.seconds) / 84.016846;
  return Number(num.toFixed(2)); 
};

SpaceAge.prototype.onNeptune = function() {
  const num = calcEarth(this.seconds) / 164.79132;
  return Number(num.toFixed(2)); 
};


module.exports = SpaceAge;
