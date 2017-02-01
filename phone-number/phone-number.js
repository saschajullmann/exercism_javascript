var PhoneNumber = function(phoneNumber) {
  this.phoneNumber = phoneNumber;
};

PhoneNumber.prototype.number = function() {
  var strippedNumber = this.phoneNumber.replace(/[()\s.-]/g, '');
  if(strippedNumber.length === 10 || (strippedNumber.length == 11 && strippedNumber[0] === '1')) {
    /*number is valid*/
    return strippedNumber.slice(-10)
  }
  else {
    return '0000000000' 
  }
};

PhoneNumber.prototype.areaCode = function() {
  var stripped = this.number(this.PhoneNumber);
  return stripped.slice(0, 3)
};

PhoneNumber.prototype.toString = function() {
  var stripped = this.number(this.PhoneNumber);
  var area = stripped.slice(0, 3)
  var middle = stripped.slice(3, 6)
  var end = stripped.slice(-4)
  return `(${area}) ${middle}-${end}` 

};

module.exports = PhoneNumber;
