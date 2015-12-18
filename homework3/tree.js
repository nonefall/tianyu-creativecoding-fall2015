var branches = [];
var a=0.0;
var s=0.0;
var bool_1 =false;
var array_X = [];
var array_Y = [];
var amount = 0;

function setup(){
  createCanvas(640,640);
  storke(0,150,255,65);
  for(var i = 0; i < 10; i++)
  {
    var startAngle = random(-10,10);
    branches[i] = startAngle;
  }
}

