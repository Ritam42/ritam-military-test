var bullet, wall;
var speed, weight, thickness;

function setup() {
createCanvas(1600,800);
  
speed = random(223, 331);
weight = random(30, 52);
thickness = random(22, 83);

bullet = createSprite(50, 200, 50, 10);

wall = createSprite(1200, 200, thickness, height/2);

}

function draw() {
  background(0, 0, 0); 

  bullet.velocityX = speed;
  
  if(hasCollided(bullet, wall)){

    bullet.velocityX = 0;

    var damage = 0.5 * weight * speed * speed/(thickness * thickness * thickness);
    
    if(damage > 10){
      wall.shapeColor = color(225, 0, 0);
    }

    if(damage < 10){
      wall.shapeColor = color(0, 225, 0);
    }
 }

  drawSprites();
}

function hasCollided(bullet, wall){

  bulletRightEdge = bullet.x + bullet.width;
  wallLeftEdge = wall.x;
  
  if(bulletRightEdge >= wallLeftEdge){
   return true
  }
   return false;
  }
  
  



