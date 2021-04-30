var rect1, rect2



function setup() {
  createCanvas(800,400);
  rect1=createSprite(20, 200, 50, 50);
  rect1.shapeColor="pink"
  rect1.velocityX= 3
  rect2=createSprite(400,200, 50,50);
  rect2.shapeColor="skyblue"
  rect2.velocityX=-3
}

function draw() {
  background("lightblue");  
  if(rect2.x-rect1.x<rect1.width/2+rect2.width/2 &&rect1.x-rect2.x<rect1.width/2+rect2.width/2){
    rect1.velocityX=rect1.velocityX*(-1)
  rect2.velocityX=rect2.velocityX*(-1)
  }
  drawSprites();
}