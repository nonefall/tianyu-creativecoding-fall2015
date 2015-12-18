var branches = [];
var a=0.0;
var s=0.0;
var bool_1 = false;
var array_X =[];
var array_Y =[];
var amount = 0;
 
function setup(){
  createCanvas(800, 800);
  stroke(0, 65, 0, 65);
  for(var i = 0; i < 10; i++)
  {
    var startAngle = random(65,5);
    branches[i] = startAngle;
  }
}
function branch(len, num){
    
    var t = map(len, 1, 160, 1, 5);
    var theta = sin(len+num) * 3;
    strokeWeight(t);
    line(0, 0, 0, -len);
    ellipse(0, 0, t, t);
    translate(0, -len);
    len *= 0.50;
    if(len > 2){
      push();
      rotate(radians(-20+theta));
      branch(len,10);
      pop();
      
      push();
      rotate(radians(20-theta));
      branch(len,10);
      pop();
    }
    else{
      ellipse(0, 0, 3, 3);
    }
    num += 0.001;
}

