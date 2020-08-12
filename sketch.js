const Bodies= Matter.Bodies
const Engine  = Matter.Engine
const World = Matter.World

var ground,particles;

var engine, world;
var dividers = []
var plinko = []



function setup() {
  engine = Engine.create();
    world = engine.world;
  createCanvas(480,800);
 
  ground  = new Ground(width/2,800,width,20);

for(k = 0;k<=width;k = k+80){
  dividers.push(new Ground (k,700,10,200));
}

for(j = 75;j <=width;j = j+50){
  plinko.push(new Plinko(j,75));
}




}

function draw() {
  background(0);  

  ground.display();
  for(k=0;k<dividers.length;k++){
    dividers[k].display();
  }

  for(j = 0;j<plinko.length; j++){
  plinko[j].display();
  }
}