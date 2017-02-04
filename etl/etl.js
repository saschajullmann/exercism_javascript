const ETL = function() {};

ETL.prototype.transform = function(obj) {
  let newObj = {};
  const keys = Object.keys(obj);
  for (i = 0; i < keys.length; i++) {
    let arr = obj[keys[i]];
    for (j = 0; j < arr.length; j++) {
      newObj[arr[j].toLowerCase()] = Number(keys[i]);
    };
  };
  return newObj;
};

module.exports = ETL;
