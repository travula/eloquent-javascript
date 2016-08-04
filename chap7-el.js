function Grid(width, height) {
  this.space = new Array(width * height);
  this.width = width;
  this.height = height;
}

Grid.prototype.isInside = function(vector) {
  return vector.x >= 0 && vector.x < this.width && 
    vector.y >= 0 && vector.y < this.height;
};

Grid.prototype.get = function(vector) {
  return this.space[vector.x + (this.width * vector.y)];
};

Grid.prototype.set = function(vector, value) {
  this.space[vector.x + (this.width * vector.y)] = value;
};

var grid = new Grid(5, 5);
console.log(grid.get(new Vector(1, 1)));
grid.set(new Vector(1, 1), 'X');
console.log(grid.get(new Vector(1, 1)));

var directions = {
"n": new Vector ( 0 , -1) ,
"ne": new Vector ( 1 , -1) ,
"e": new Vector ( 1 , 0) ,
"se": new Vector ( 1 , 1) ,
"s": new Vector ( 0 , 1) ,
"sw": new Vector ( -1 , 1) ,
"w": new Vector ( -1 , 0) ,
"nw": new Vector ( -1 , -1)
};

