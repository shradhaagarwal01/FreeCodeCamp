/*Convert the given number into a roman numeral.

All roman numerals answers should be provided in upper-case.*/

function convertToRoman(num) {
  var m = ["", "M", "MM", "MMM"];
  var c = ["", "C", "CC", "CCC", "CD", "D","DC","DCC", "DCCC", "CM "];
  var  x = ["","X","XX","XXX","XL", "L", "LX", "LXX", "LXXX", "XC"];
  var  i = ["","I","II","III","IV","V", "VI", "VII", "VIII", "IX"];
  var thousands = m[Math.floor(num/1000)];
  var hundereds = c[Math.floor((num%1000)/100)];
  var tens = x[Math.floor((num%100)/10)];
  var ones = i[num%10];
  var ans = thousands + hundereds + tens + ones;
  return ans.replace(/ /g,'');
}

convertToRoman(36);
