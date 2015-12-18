var angleH = 0.0;
var angleM = 0.0;
var angleS = 0.0;
var hx=0
var hy=0;
var mx=0
var my=0;
var sx=0
var sy=0;

function setup(){
  createCanvas(800,800);
}

function draw(){
  background(255); 
  translate(width/2, height/2); 
  fill(0,191,255); 
  ellipse(0,0,500,500); 
  
  angleH = map(hour(), 0, 24, 0, TWO_PI*2) - HALF_PI; 
  angleM = map(minute(), 0, 60, 0, TWO_PI) - HALF_PI; 
  angleS = map(second(), 0, 60, 0, TWO_PI) - HALF_PI; 

  hx = cos(angleH) * 90; 
  hy = sin(angleH) * 90; 
  mx = cos(angleM) * 180; 
  my = sin(angleM) * 180; 
  sx = cos(angleS) * 150; 
  sy = sin(angleS) * 150; 
  
  stroke(255,255,0); 
  strokeWeight(4); 
  line(0,0,hx,hy); 
  stroke(0,255,0); 
  strokeWeight(3); 
  line(0,0,mx,my); 
  stroke(255,0,0); 
  strokeWeight(2); 
  line(0,0,sx,sy);


}