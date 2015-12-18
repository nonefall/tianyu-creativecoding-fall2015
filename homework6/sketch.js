var centerImage;
var img_a;
var img_b;
var img_c;
var img_d;
var canvas;
var count;

function setup() {
  canvas = createCanvas(1000, 1000);
  canvas.position(0, 0);
  image_a = createImg("https://www.dropbox.com/s/i9fcp32e35iusyu/1.jpg?dl=0");
  image_b = createImg("https://www.dropbox.com/s/r7106ut4gsz7th7/2.jpg?dl=0");
  image_c = createImg("https://www.dropbox.com/s/ry8dj04e7fkm9v2/3.png?dl=0");
  image_d = createImg("https://www.dropbox.com/s/levfqckzffso75u/IMG_2548%E5%B0%8F.jpg?dl=0");
  image_a.position(200, 80);
  image_a.size(300, 300);
  image_b.position(600, 80);
  image_b.size(300, 300);
  image_c.position(200, 480);
  image_c.size(300, 300);
  image_d.position(600, 480);
  image_d.size(300, 300);
  count = 1;
  
  image_a.mousePressed(imgShow);
  text = createP("I love New York ! ");
  text.position(250, 30);
  text.style("font-family", "Times");
  text.style("color", "#FF0000");
  text.style("font-size", "50pt");
}

function draw() {
  noStroke();
  background(255);
  strokeWeight(3);
  stroke(28, 237, 56);
  for (var i = 0; i < height; i += 15) {
    line(0, i, width, i);
  }
}

function imgShow() {
  count = count + 1;
  if (count%4 == 1)
  {
  image_a.show();
  image_a.mousePressed(imgShow);
  }
  if (count%4 == 2)
  {
  image_b.show();
  image_b.mousePressed(imgShow);
  }
  if (count%4 == 3)
  {
  image_c.show();
  image_c.mousePressed(imgShow);
  }
  if (count%4 === 0)
  {
  image_d.show();
  image_d.mousePressed(imgShow);
  }
}