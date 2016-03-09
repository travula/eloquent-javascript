
function summa(arr) {
  var sum = 0;
  arr.forEach(function adda(num) {
    sum += num;
  });
  return sum;
}

function greaterThan(n) {
  return function(m) {
    return m > n;
  };
}

function noisy(f) {
//  console.log("Calling with: ", arg);
  return function(arg) {
    console.log("Calling with: ", arg);
    var val = f(arg);
    console.log("Called with: ", arg, "- got ", val);
    return val;
  };
}
