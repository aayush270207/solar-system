var fixedRect,movingRect;

function setup() {
  createCanvas(800,400);
 fixedRect=createSprite(400, 200, 50, 50);
 movingRect=createSprite(0,0,80,40);
 fixedRect.shapeColor="blue";
 movingRect.shapeColor="blue";
}

function draw() {
  background(0);  
  movingRect.x=mouseX;
  movingRect.y=mouseY;
if(movingRect.x-fixedRect.x<movingRect.width/2+fixedRect.width/2&&
  fixedRect.x-movingRect.x<movingRect.width/2+fixedRect.width/2 ){
    movingRect.shapeColor="red";
    fixedRect.shapeColor="red";
  }
  else{
    movingRect.shapeColor="blue";
    fixedRect.shapeColor="blue";
  }
  drawSprites();
}