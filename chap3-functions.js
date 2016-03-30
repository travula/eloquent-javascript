var power = function(base, exponent) {
  var result = 1;
  for (var i = 0; i < exponent; i++) {
    result *= base;
  }
  return result;
};

console.log(power(2, 5));

function pow(base, exponent) {
  if (exponent == undefined)
    exponent = 2;

  return power(base, exponent);

}

console.log(pow(5));

function multiplier(factor) {
  return function(number) {
    return factor * number;
  };
}

var twice = multiplier(2);
var thrice = multiplier(3);

console.log("Double 4 -> %d", twice(4));
console.log("Treble 4 -> %d", thrice(4));

function rec_pow(base, exponent) {
  if (exponent == 0)
    return 1;
  else
    return base * rec_pow(base, exponent -1);
}

console.log("value of 2 to the power 5 = %d", rec_pow(2, 5));


var findSolution = function(target) {
  function find(start, history) {
    if(start == target)
      return history;
    else if (start > target)
      return null;
    else
      return (find(start + 5, "(" + history + " + 5)") ||
              find(start * 3, "(" + history + " * 3)"));
  }
  return find(1, "1");
}

function zeroPad(number, width) {
  var str = String(number);
  while (str.length < width)
    str = "0" + str;

  return str;
}

function printFarmInventory(cows, chicken, pigs) {
  console.log(zeroPad(cows, 3) +  "  Cows");
  console.log(zeroPad(chicken, 3) +  "  Chicken");
  console.log(zeroPad(pigs, 3) +  "  Pigs");
}

printFarmInventory(1,2,3);

function min(a, b) {
  return a < b ? a : b;
}

function isEven(number) {
  if (number == 1)
    return false;
  else if (number == 0)
    return true;
  else
    return isEven(number - 2);
}

function countAChar(str, ch) {
  var count = 0;
  for (var i = 0; i < str.length; i++) {
    if (str.charAt(i) == ch)
      count++;
  }
  return count;
}

function lexical() {

  var i = "hello";
  var kk = function() {
    i += " World";
    var p = 30;
  };

  kk();
  console.log("i = ", i);
  console.log("p = ", p);

}

var landscape = function () {
  var result = "";
  var flat = function ( size ) {
    for ( var count = 0; count < size ; count ++)
      result += " _ ";
  };
  var mountain = function ( size ) {
    result += "/";
    for ( var count = 0; count < size ; count ++)
      result += "  ";
    result += "\\";
  };
  flat (3) ;
  mountain (4) ;
  flat (6) ;
  mountain (1) ;
  flat (1) ;
  return result ;
};
      
  
