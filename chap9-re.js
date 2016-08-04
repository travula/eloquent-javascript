var re1 = new RegExp("abc");

var re2 = /abc/;

var re3 = /eighteen\+/;

console.log(/[0-9]/.test("in 1992") + " finds");

var notBinary = /[^01]/;
console.log(notBinary.test("1101010000101011") + " is binary");
console.log(notBinary.test("1101020000101011") + " is not binary");

var nei = /neighbou?r/;

console.log(nei.test("neighbour") + " applies");
console.log(nei.test("neighbor") + " also applies");

var dateTime = /\d{1,2}-\d{1,2}-\d{4} \d{1,2}:\d{2}/;
console.log(dateTime.test("30-1-2003 8:45") + " date matches");

var cartoonCrying = /boo+(hoo+)+/i;
console.log(cartoonCrying.test("Boohoooohoohooooo") + " cartoon cries");

var match = /\d+/.exec("one two 345");
var str = "one two 345";
console.log("match = " + match + " and index is " + match.index);
console.log("match = " + str.match(/\d+/));

var quotedText = /'([^']*)'/;
var quotedText1 = /'\w+'/;
console.log(quotedText.exec("she said 'hello'"));
console.log(quotedText1.exec("she said 'hello'"));
console.log(/bad(ly){0,}/.exec("bad"));

function findDate(string) {

  var dateTime = /(\d{1,2})-(\d{1,2})-(\d{4})/;
  var match = dateTime.exec(string);
  console.log(match);
  return new Date(Number(match[3]), 
                  Number(match[2] -1),
                  Number(match[1]));
}

console.log("Date is: " + findDate("01-12-2016"));
console.log(/cat/.test("concatanate") + " with no boundary");
console.log(/\bcat\b/.test("concatanate") + " with boundary");
console.log(/\b(cat)+\b/.test("catcatcat") + " with boundary");

var animalCount = /\b\d+ (pig|cow|chicken)s?\b/;
console.log(animalCount.test("15 pigs") + ", there are pigs");
console.log ("Borobudur".replace(/[ou]/g, "a"));

var str1 = "Hopper, Grace\nMcCarthy, John\nRitchie, Dennis";
console.log(str1.replace(/([\w ]+), ([\w ]+)/g, "$2, $1"));

var s = "the cia and fbi";
console.log(s.replace(/\b(fbi|cia)\b/g, function(str) {
  return str.toUpperCase();
}));

var stock = "1 lemon, 2 cabbages, and 101 eggs";

function minusOne(match, amount, unit) {
  console.log(match);
  amount = Number(amount) -1;
  if (amount == 1) {
    unit.slice(0, unit.length -1);
  } else if (amount == 0) {
    amount = "no";
  }
  return amount + " " + unit;
}

console.log(stock.replace(/(\d+) (\w+)/g, minusOne));

function stripComments(code) {
  return code.replace(/\/\/.*|\/\*[^]*?\*\//g, "");
}

console.log(stripComments("1 + /* 2 */ 3"));
console.log(stripComments("x = 10; //assignment"));
console.log(stripComments("1 /* a */+/* b */ 1"));

var name = "Harry";
var text = "Harry is a suspicious character";
var regexp = new RegExp("\\b(" + name + ")\\b", "gi");
console.log(text.replace(regexp, "_$1_"));

var name1 = "dea+hl[]rd";
var text1 = "dea+hl[]rd is a suspicious character";
var escaped = name1.replace(/[^\w\S]/g, "\\$&");
console.log(escaped);
regexp = new RegExp("\\b(" + escaped + ")\\b", "gi");
console.log(text1.replace(regexp, "_$1_"));
