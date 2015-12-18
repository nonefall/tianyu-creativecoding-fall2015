var weather;
function preload() {
  var url = 'http://api.openweathermap.org/data/2.5/weather?q=Beijing,cn&appid=f01986c53ebd68a303773eaac41d12ce';
  weather = loadJSON(url);
  println(weather);
}

function setup() {
  noLoop();
}

function draw() {
  createCanvas(800, 700)
  background("#00F5FF");
  line(50, 60, 50, 675)
  line(25, 450, 600, 450)
  text("Beijng weather report",350,20)
  
  text("8", 20, 275);
  text("4", 20, 375);
  text("-0", 20, 475);
  text("-4", 20, 575);
  text("-8", 20, 675);
  text("12.12", 75,475);
  text("12.13", 155, 475);
  text("12.14", 245, 475);
  text("12.15", 335, 475);
  text("12.16", 425, 475);
  text("12.17", 515, 475);
  
  line(50,500,165,400)
  line(165,400,255,650)
  line(255,650,345,550)
  line(345,550,435,400)
  line(435,400,525,300)
  
 
}