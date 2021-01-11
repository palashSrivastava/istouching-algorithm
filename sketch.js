var obj1, obj2;


function setup() {
  createCanvas(800,400);
  obj1=createSprite(50,200,25,25);
  obj2=createSprite(600,200,50,100);
  obj1.shapeColor="green";
  obj2.shapeColor="green";


  
}

function draw() {
  background(255,255,255);  
  obj1.x=World.mouseX;
  obj1.y=World.mouseY;
  if(obj2.x-obj1.x<=obj1.width/2+obj2.width/2 &&
    obj1.x-obj2.x<=obj1.width/2+obj2.width/2 && 
    obj2.y-obj1.y<=obj1.height/2+obj2.height/2 &&
    obj1.y-obj2.y<=obj1.height/2+obj2.height/2) {
    obj1.shapeColor="blue";
    obj2.shapeColor="blue";
  }
  else {

    obj1.shapeColor="pink";
    obj2.shapeColor="pink";
  }
  drawSprites();
}