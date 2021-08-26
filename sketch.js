//INSTRUCTIONS//

//  |1|  UP_ARROW = Brushing.       
//  |2|  DOWN_ARROW = Gyming.      
//  |3|  LEFT_ARROW = Eating.     
//  |4|  RIGHT_ARROW = Bathing.  
//  |5|  m_KEY = Moving.        



var move;
var drink;
var eat;
var gym;
var brush;
var sleep;
var bg;
var astronaut;
var bath;

function setup() {
  createCanvas(400, 400);

  astronaut = createSprite(300,230);
  astronaut.addAnimation("sleeping",sleep);
  astronaut.scale = 0.01;
}
function preload(){

bg = loadImage("iss.png")
sleep = loadAnimation ("sleep.png");
brush = loadAnimation ("brush.png");
gym = loadAnimation ("gym1.png","gym2.png","gym11.png","gym12.png");
eat = loadAnimation ("eat1.png","eat2.png");
drink = loadAnimation ("drink1.png","drink2.png");
move = loadAnimation ("move.png","move1.png");
bath = loadAnimation("bath1.png","bath2.png");
}

function draw() {
  background(bg);

  createEdgeSprites(edges);

  if (keyDown("UP_ARROW")) {
    astronaut.addAnimation("brushing",brush);
    astronaut.changeAnimation("brushing");
    astronaut.y = 350;
    astronaut.velocityX = 0;
    astronaut.velocityY = 0;
  }

  if (keyDown("DOWN_ARROW")) {
    astronaut.addAnimation("gymming",gym);
    astronaut.changeAnimation("gymming");
    astronaut.y = 350;
    astronaut.velocityX = 0;
    astronaut.velocityY = 0;
 }

  if (keyDown("LEFT_ARROW")) {
    astronaut.addAnimation("bathing",bath);
    astronaut.changeAnimation("bathing");
    astronaut.y = 350;
    astronaut.velocityX = 0;
    astronaut.velocityY = 0;
  }

 if (keyDown("RIGHT_ARROW")) {
    astronaut.addAnimation("eating",eat);
    astronaut.changeAnimation("eating");
    astronaut.y = 350;
    astronaut.velocityX = 0;
    astronaut.velocityY = 0;
 }

  if (keyDown("m_KEY")) {
    astronaut.addAnimation("moving",move);
    astronaut.changeAnimation("moving");
    astronaut.y = 350;
    astronaut.velocityX = 10;
    astronaut.velocityY = 5;
 }

}




