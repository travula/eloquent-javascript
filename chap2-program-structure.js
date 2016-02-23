function printTotal()
{
  var total = 0, count = 1;
  while ( count <= 10) {
    total += count ;
    count += 1;
  }
  console.log ( total ) ;
//  console.log(sum(range(1,10)));
}

function fac(n)
{
  if (n == 1 || n == 0)
    return 1;
  else
    return fac(n-1) * n;
}

function printStrings()
{
  console.log("hello\\nworld");
  console.log(typeof "x");
  console.log(typeof 5);
  
}

function tri()
{
  var max = 1;
  while (max <= 7)
  {
    var hash = "";
    for (var i = 1; i <= max; i++)
    { 
      hash = hash + "#";
    }
    console.log(hash);
    max++;
  }
}

fizz = function(num)
{
  
  for (var i = 1; i <= num; i++)
  {
    if ((i % 3 == 0) && !(i % 5 == 0))
    {
      console.log("fizz");
    }
    else if ( (i % 5 == 0) && !(i % 3 == 0))
    {
      console.log("buzz");
    }
    else if ( (i % 5 == 0) && (i % 3 == 0))
    {
      console.log("fizzbuzz");
    }
    else
    {
      console.log(i);
    }
  }
};

fizz(10);

var chess = function(size) {
  var chess_board = "";
  for (var len = 0; len < size; len++) {
    for (var wid = 0; wid < size; wid++) {
      if ((wid + len) % 2 == 0)
        chess_board += "#";
      else
        chess_board += " ";
    }
    chess_board += "\n";
  }
  console.log(chess_board);
};

chess(8);

var square = function(x) {
  return x * x;
};

var makeNoise = function() {
  console.log("Pling");
};

makeNoise();


