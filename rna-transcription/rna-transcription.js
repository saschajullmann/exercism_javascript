var DnaTranscriber = function () {};

dic = {
  C: "G",
  G: "C",
  A: "U",
  T: "A",
}

DnaTranscriber.prototype.toRna = function(dnaStrand) {
  var rnaStrand = "";
  for (i=0; i < dnaStrand.length; i++) {
    var position = dnaStrand[i]
    //rnaStrand.concat(dic[position])
    rnaStrand = rnaStrand + dic[position]
  } 
  return rnaStrand;
};

module.exports = DnaTranscriber;
