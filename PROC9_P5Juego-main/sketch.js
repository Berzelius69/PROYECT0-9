var box;
function setup() {
  createCanvas(900,900);
  box=createSprite(200,200,100,100);
}

function draw() 
{
  background("Lemonchiffon");
  if(keyDown(RIGHT_ARROW)){
  box.position.x=box.position.x+10;
  background("Tomato");
  } 
  if(keyDown(LEFT_ARROW)){
  box.position.x=box.position.x-10;
  background("Dodgerblue ");
  } 
  if(keyDown(UP_ARROW)){
  box.position.y=box.position.y-10;
  background("#483d8b");
  } 
  if(keyDown(DOWN_ARROW)){
  box.position.y=box.position.y+10;
  background("gold");
  }
   
  
  
  drawSprites();
}




