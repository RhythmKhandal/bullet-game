var wall,thickness;
var bullet,speed,weight;
var BulletSound;
//var invisibleWall;

function preload(){


BulletSound = loadSound("bulletSound.mp3");



}











function setup() {
  createCanvas(1600,400);
  
  speed = random(223,321);
  weight = random(30,52);
  thickness = random(22,83);
  //position = random(1430,1460);

  bullet=createSprite(50,200,50,15);
  wall=createSprite(1500,200,thickness,height/2);
  bullet.shapeColor = color(80,80,80);
  wall.shapeColor = color(80,80,80)

  //invisibleWall = createSprite(1450,200,20,height/2);

}

function draw() {
  background("black"); 
  
  bullet.velocityX = speed;

hasCollided();


//detecting the collision
  if (hasCollided(bullet,wall)){
    bullet.velocityX = 0;
   
    var damage = 0.5 * weight * speed * speed / (thickness * thickness * thickness)

    if (damage > 10){
      wall.shapeColor = color(255,0,0)
    }
    
    if (damage < 10){
      wall.shapeColor = color(0,255,0)
    }

    
      BulletSound.play();

    

   
    
  }else {
    BulletSound.stop();
  }

 







  



  drawSprites();
}

function hasCollided(lbullet,lwall){

bulletRightEdge = bullet.x + bullet.width;
wallLeftEdge = wall.x;

if (bulletRightEdge >= wallLeftEdge)
{
return true
}

return false;



}







