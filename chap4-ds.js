var day1 = {
  squirrel: false,
  activities: ['work', 'eat', 'sleep', 'mate']
};


console.log("day1.wolf = %s", day1.wolf);
day1.wolf = true;
console.log("day1.wolf = %s", day1.wolf);

console.log('wolf' in day1);
ss = 'saree';
console.log(ss in day1);
console.log(day1);
delete day1.wolf;
console.log(day1);

function phi(log) {
  return (log[0]*log[3] - log[1]*log[2])/
    Math.sqrt((log[0] + log[1]) *
              (log[2] + log[3]) *
              (log[0] + log[2]) *
              (log[1] + log[3]));
}

console.log("Phi = %f", phi([76, 9, 4, 1]));

function hasEntry(entry, event) {
  return entry.events.indexOf(event) != -1;
}

function createTable(event, journal) {
  table = [0, 0, 0, 0];
  for(var i = 0; i < journal.length; i++) {
    var index = 0;
    entry = journal[i];
    if (entry['squirrel']) // 10, 11
      index += 2;
    if (hasEntry(entry, event)) // 01, 11
      index += 1;
    table[index]++;
  }
  return table;
}

function createCorrelationMap(journal) {
  phiMap = {};
  for(var i = 0; i < journal.length; i++) {
    entry = journal[i];
    for(var j = 0; j < entry.events.length; j++) {
      event = entry.events[j];
      if (!(event in phiMap)){
        phiMap[event] = phi(createTable(event, journal));
      }
    }
  }
  return phiMap;
}

function printMap(journal) {
  correlations = createCorrelationMap(journal);
  for (var event in correlations)
    console.log(event + ":  " + correlations[event]);
}

function greaterCorrelationMap(journal) {
  var correlations = createCorrelationMap(journal);
  for (var event in correlations) {
    var correlation = correlations[event];
    if (correlation > 0.1 || correlation < -0.1)
      console.log(event + ":  " + correlations[event]);
  }
}

function twoEventsEvent(journal) {
  for (var i = 0; i < journal.length; i++) {
    var entry = journal[i];
    if (hasEntry(entry, 'peanuts') && 
        !hasEntry(entry, 'brushed teeth')) {
      entry.events.push("peannuts teech");
    }
  }
}

function peanutCorrelation(journal) {
  twoEventsEvent(journal);
  greaterCorrelationMap(journal);
}

var toDoList = [];

function rememberTask(task) {
  toDoList.push(task); //add to the end
}

function whatToDoNext() {
  return toDoList.shift(); //remove from front
}

function urgentlyRemember(task) {
  toDoList.unshift(task); //add to front
}

var remove = function(array, index) {
  return array.slice(0, index).concat(array.slice(index+1));
};

var argumentCounter = function() {
  console.log("There are ", arguments.length, "two arguments");
};

var randomPointOnCircle = function(radius) {
  var angle = Math.random() * 2 * Math.PI;
  return {x: radius * Math.cos(angle),
          y: radius * Math.sin(angle)
         };
};

function range(start, end, step) {
  if (step == undefined) {
    step = 1;
  }
  var array = [];
  if (step == 0) {
    return array;
  } else if (step > 0) {
    while (end >= start) {
      array.push(start);
      start += step;
    }
  } else {
    while (start >= end) {
      array.push(start);
      start += step;
    }
  }
  return array;
}

function reverse(array) {
  arr = [];
  for (var i = array.length; i >= 0; i--) {
    arr.push(array[i]);
  }

  return arr;
}

function reverseArrayInPlace(array) {
  var temp;
  var length = array.length;
  for (var i = 0; i < length/2; i++)
  {
    temp = array[i];
    array[i] = array[length - i - 1];
    array[length -i - 1] = temp;
  }
}

function arrayToList(array)
{
  var list = null;
  for (var i = array.length - 1; i >= 0; i--)
  {
    list = {value: array[i],
            rest: list};
  }
  return list;
}

function arrToListRec(array)
{
  if (array.length == 0) {
    return null;
  } else {
    return {value: array.shift(),
            rest: arrToListRec(array)
           };
  }
}

function listToArray(list)
{
  var array = [];
  while (list != null)
  {
    array.push(list.value);
    list = list.rest;
  }
  return array;
}

function prependToList(list, value)
{
  return {value: value,
          rest: list
         };
}

function enth(list, index)
{
  if (index == 1 && list != null)
  {
    return list.value;
  } else if (list == null){
    return null;
  } else {
    return enth(list.rest, index - 1);
  }
}
