var rabbit = {};

rabbit.speak = function(line) {
  console.log("The rabbit says: '" + line + "'");
};

rabbit.speak("I am alive");

function speak(line) {
  console.log("The rabbit of type " + this.type + " says: '" + line + "'");
};

var whiteRabbit = {type: "white", speak: speak};
var fatRabbit = {type: "fat", speak: speak};

whiteRabbit.speak("There is no fun in having no pigments");
fatRabbit.speak("I should be careful with resources, they are not infinite");

speak.apply(fatRabbit, ["Burp!"]);
speak.call({type: "old"}, "oh my ..");

var empty = {};

console.log(empty.toString);
console.log(empty.toString());
console.log(Object.getPrototypeOf({}) == Object.prototype);
console.log(Object.getPrototypeOf(Object.prototype));
console.log(Object.getPrototypeOf(isNaN) == Function.prototype);
console.log(Object.getPrototypeOf([]) == Array.prototype);

var protoRabbit = {
  speak: function(line) {
    console.log("The " + this.type + " rabbit says '" + line + "'");
  }
};

var killerRabbit = Object.create(protoRabbit);
killerRabbit.type = "killer";
killerRabbit.speak("SKREEE!");

function Rabbit(type) {
  this.type = type;
}

var blueRabbit = new Rabbit("blue");
var hareRabbit = new Rabbit("hare");

console.log(blueRabbit.type);

Rabbit.prototype.speak = function(line) {
    console.log("The " + this.type + " rabbit says '" + line + "'");
};

blueRabbit.speak("I like any Blues");
Rabbit.prototype.teeth = "unfossed";

console.log(blueRabbit.teeth);
blueRabbit.teeth = "fossed";
hareRabbit.teeth = "fossed yesterday";
console.log(blueRabbit.teeth);
console.log(hareRabbit.teeth);

console.log(Array.prototype.toString == Object.prototype.toString);
console.log([1,2].toString());
console.log(Object.prototype.toString.call([1,2]));

Rabbit.prototype.dance = function() {
  console.log("The " + this.type + " rabbit dances a jig");
};

blueRabbit.dance();

var map = {};
function storeInMap(m, event, value){
  m[event] = value;
}

storeInMap(map, "pizza", 0.69);
storeInMap(map, "touched tree", 0.4);

Object.prototype.nonsense = "hi";

for (event in map) {
  console.log(event);
}

console.log("nonsense" in map);
console.log("toString" in map);

delete Object.prototype.nonsense;


for (event in map) {
  console.log(event);
}


Object.defineProperty(Object.prototype, "hiddenNonsence", 
                      {enumerable: false, value: "hi"});

for (event in map) {
  console.log(event);
}

console.log("hiddenNonsence" in map);
console.log(map.hiddenNonsence);

Object.prototype.nonsense = "hi";

console.log("***Print only the particular object's properties***");
console.log(map.hasOwnProperty("nonsense"));
for (event in map) {
  if (map.hasOwnProperty(event)) {
    console.log(event);
  }
}

console.log("***No inheritance from Object***");
var justMap = Object.create(null);
storeInMap(justMap, "pizza", 0.69);
storeInMap(justMap, "touched tree", 0.4);

for (event in justMap) {
  console.log(event);
}

function rowHeights(rows) {
  return rows.map(function(row) {
    return row.reduce(function(max, cell) {
      return Math.max(max,cell.minHeight());
    }, 0);
  });
}

function colWidths(rows) {
  return rows[0].map(function(_, i) {
    return rows.reduce(function(max, row) {
      return Math.max(max, row[i].minWidth());
    }, 0);
  });
}

function drawTable(rows) {

  var heights = rowHeights(rows);
  var widths = colWidths(rows);


  function drawLine(blocks, lineNo) {
    return blocks.map(function(block) {
      return block[lineNo];
    }).join(" ");
  }

  function drawRow(row, rowNum) {
    var blocks = row.map(function(cell, colNum) {
      return cell.draw(widths[colNum], heights[rowNum]);
    });

    return blocks[0].map(function(_, lineNo) {
      return drawLine(blocks, lineNo);
    }).join("\n");
  }

  return rows.map(drawRow).join("\n");
}

function repeat(string, times) {
  var result = "";
  for(var i = 0; i < times; i++) {
    result += string;
  }
}

function TextCell(text) {
  this.text = text.split("\n");
}

TextCell.prototype.minWidth = function() {
  return this.text.reduce(function(width, line) {
    return Math.max(width, line.length);
  }, 0);

};

TextCell.prototype.minHeight = function() {
  return this.text.length;
};

TextCell.prototype.draw = function(width, height) {
  var result = [];
  for (var i = 0; i < height; i++) {
    var line = this.text[i] || "";
    result.push(line + repeat(" ", width - line.length));
  }
  return result;
};

var rows = [];

for (var i = 0; i < 5; i++) {
  var row = [];
  for (var j = 0; j < 5; j++) {
    if ((j + i) % 2 == 0) {
      row.push(new TextCell('##'));
    } else {
      row.push(new TextCell(" "));
    }
  }
  rows.push(row);
}

//console.log(drawTable(rows));

var pile = { 
  elements: ["eggshell", "orange peel", "worm"],
  get height() {
    return this.elements.length;
  },

  set height(value) {
    console.log("Cannot set height for the elements");
  }
};


Object.defineProperty(TextCell.prototype, "heightProp", {
  get: function() { return this.text.length; }
});

var cell = new TextCell("no\nway");
console.log(cell.heightProp);
cell.heightProp = 100;
console.log(cell.heightProp);


//Exercise 1

function Vector(x, y) {
  this.x = x;
  this.y = y;
}

Vector.prototype.plus = function(vec) {
  var v = new Vector(vec.x, vec.y);
  v.x += this.x;
  v.y += this.y;
  return v;
};

Vector.prototype.minus = function(vec) {
  var v = new Vector(this.x, this.y);
  v.x -= vec.x;
  v.y -= vec.y;
  return v;
};
  
Object.defineProperty(Vector.prototype, "length", {
  get: function() { return Math.sqrt(this.x * this.x + this.y * this.y); }
});



