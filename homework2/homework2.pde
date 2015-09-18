void setup(){
  size(400,600);
  background(207,205,198);
  }
void draw(){
  noStroke();
  fill(216,215,210);
  rect(20,20,360,560);
  
  beginShape();
  fill(56,49,61);
  vertex(200,20);
  vertex(300,40);
  vertex(220,200);
  vertex(120,180);
  endShape();
  
  beginShape();
  fill(36,36,38);
  rect(90,380,60,60);
  endShape();
  
  beginShape();
  fill(182,156,36);
  vertex(168,320);
  vertex(169,430);
  vertex(228,432);
  vertex(243,322);
  endShape();
  
  beginShape();
  fill(0);
  vertex(125,470);
  vertex(168,440);
  vertex(178,455);
  vertex(135,485);
  endShape();
  
  beginShape();
  fill(149,47,33);
  vertex(168,472);
  vertex(198,470);
  vertex(200,480);
  vertex(170,482);
  endShape();
  
  stroke(27,44,121);
  strokeWeight(8);
  line(65,400,310,420);
  
  stroke(145,54,39);
  strokeWeight(5);
  line(190,485,240,486);
  
  beginShape();
  noStroke();
  fill(70,133,45);
  ellipse(210,497,15,15);
}