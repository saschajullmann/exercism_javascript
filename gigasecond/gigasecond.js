var Gigasecond = function(day) {
  this.day = day;
};

Gigasecond.prototype.date = function() {
  return new Date(this.day.getTime() + 1000000000000);
};

module.exports = Gigasecond;
