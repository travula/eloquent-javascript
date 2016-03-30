
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

function unless(test, then) {
  if (!test) then();
}

function repeat(times, body) {
  for (var i = 0; i < times; i++) body(i);
}

repeat(3, function(n) {
  unless(n % 2, function() {
    console.log(n, " is even");
  });
});

var ancestry = JSON.parse(ANCESTRY_FILE);

function filter(array, test) {
  var filtered = [];
  array.forEach(function(entry) {
    if (test(entry)) {
      filtered.push(entry);
    }
  });
  return filtered;
}

console.log(filter(ancestry, function(person) {
  return person.born > 1900 && person.born < 1925;
}));

console.log(ancestry.filter(function(person) {
  return person.father == "Carel Haverbeke";
}));

function map(array, transform) {
  mapped = [];
  array.forEach(function(entry) {
    mapped.push(transform(entry));
  });
  return mapped;
}

var overNinety = filter(ancestry, function(person) {
  return person.died - person.born > 90;
});

console.log(map(overNinety, function(person){
  return person.name;
}));


function reduce(array, fold, start) {
  var current = start;
  array.forEach(function(entry) {
    current = fold(current, entry);
  });
  return current;
}

function fold(a, b) {
  return a * b;
}

console.log(reduce([1,2,3,4], fold, 1));

console.log(ancestry.reduce(function(cur, min) {
  if (cur.born < min.born) {
    return cur;
  } else {
    return min;
  }
}));

function average(array) {
  function plus(a, b) { return a + b; }
  return array.reduce(plus) / array.length;
}

function male(entry) {
  return entry.sex == 'm';
}

function female(entry) {
  return entry.sex == 'f';
}

function age(entry) {
  return entry.died - entry.born;
}

console.log("average age = ", average(ancestry.map(age)));
console.log("average age of females = ", average(ancestry.filter(female).map(age)));
console.log("average age of males = ", average(ancestry.filter(male).map(age)));

var byName = {};
ancestry.forEach(function(person) {
  byName[person.name] = person;
});


function reduceAncestors(person, f, defaultValue) {
  function valueFor(person) {
    if (person == null) {
      return defaultValue;
    } else {
//      console.log("person = ", person.name);
//      console.log("mother = ", person.mother);
//      console.log("father = ", person.father);
      return f(person, valueFor(byName[person.mother]),
               valueFor(byName[person.father]));
    }
  }
  return valueFor(person);
}

function sharedDNA(person, fromMother, fromFather) {
  if (person.name == "Pauwels van Haverbeke") {
 //   console.log("DaDaDaDaDa.......");
    return 1;
  } else {
//    console.log("blahblah.......", (fromMother + fromFather) / 2);
    return (fromMother + fromFather) / 2;
  }
}

var ph = byName["Philibert Haverbeke"];

console.log(reduceAncestors ( ph , sharedDNA , 0) / 4) ;

var theSet = ["Carel Haverbeke", "Maria van Brussel", "Donald Duck"];

function isInSet(set, person) {
  return set.indexOf(person.name) > -1;
}

console.log(ancestry.filter(function(person) {
  return isInSet(theSet, person);
}));

console.log(ancestry.filter(isInSet.bind(null, theSet)));

function tada(arg1, arg2) {
  console.log(arguments[0], arguments[1]);
}

function transWrap(f) {
  return function() {
    f.apply(null, arguments);
  };
}

transWrap(tada('hello', 'world'));


function flattening(arr_of_arrays) {
  var single_array = arr_of_arrays.reduce(function(a, b) {
    return a.concat(b);
  }, []);

  return single_array;
}

function motherChildAvg(persons) {
  var personsWithMothers = persons.filter(function(person) {
    if (person.mother != null) {
      if (byName[person.mother] != undefined) {
        return true;
      }
    }
    return false;
  });

  var ageDiff = personsWithMothers.map(function(person) {
    return person.born - byName[person.mother].born;
  });


  return (ageDiff.reduce(function(a, b) {
    return a + b;
  }, 0)) / ageDiff.length;

}

function ageAveragesByCentury(persons) {

  var byCentury = {};
  persons.forEach(function(person) {
    var cent = Math.ceil(person.died / 100);
    if (!byCentury.hasOwnProperty(cent)) {
      byCentury[cent] = [];
    }
    
    byCentury[cent].push(person.died - person.born);
  });

  for(var cent in byCentury) {
    console.log("Life Average in %d century in %d", cent, 
                (byCentury[cent].reduce(function(a, b) {
                  return a + b;
                  }, 0)) / byCentury[cent].length);
  }
}

function every( array, test) {
  var ret_val = true;
  array.forEach(function(element) {
    if (!test(element)) {
      ret_val = false;
    }
  });
  return ret_val;
}

console.log(every([1,2,3,4], function(num) { return num < 5;} ));

function some(array, test) {
  var ret_val = false;
  for (var i = 0; i < array.length; i++) {
    if (test(array[i])) {
      ret_val = true;
      break;
    }
  }
  return ret_val;
}
  

console.log(some([1,2,3,4], function(num) { return num > 3;} ));
