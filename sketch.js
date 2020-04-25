var sun;
var mercury,venus,earth,mars,jupiter,saturn,uranus,neptune;


function setup() {
  createCanvas(1200,800);
  sun=createSprite(50,300,200,200);
  mercury=createSprite(200,350,20,20);
  venus=createSprite(300,350,30,30);
  earth=createSprite(450,350,50,50);
  mars=createSprite(600,350,40,40);
  jupiter=createSprite(750,350,150,150);
  saturn=createSprite(900,350,100,100);
  uranus=createSprite(1000,350,65,65);
  neptune=createSprite(1150,350,65,65);
}

function draw() {
  background(0); 
  drawSprites();
}