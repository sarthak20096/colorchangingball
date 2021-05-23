var fixedRect, movingRect;
var ob1,ob2,ob3,ob4;

function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(400, 100, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;
  movingRect = createSprite(400,800,80,30);
  movingRect.shapeColor = "green";
  movingRect.debug = true;
movingRect.velocityY=-5
fixedRect.velocityY=5

  // ob1 = createSprite(100,100,50,50);
  // ob2 = createSprite(200,100,50,50);
  // ob3 = createSprite(300,100,50,50);
  // ob4 = createSprite(400,100,50,50);

  // ob1.shapeColor = "pink";
  // ob2.shapeColor = "purple";
  // ob3.shapeColor = "red";
  // ob4.shapeColor = "white";
}

function draw() {
  background(0,0,0);  
bounce(movingRect,fixedRect)

 // movingRect.x = World.mouseX;
  //movingRect.y = World.mouseY;

  // if(isTouching(movingRect,ob4)){
  // movingRect.shapeColor = "blue";
  // ob4.shapeColor = "orange";
  // }
  // else{
  // movingRect.shapeColor = "green";
  // ob4.shapeColor = "white";
  // }

  drawSprites();
}


