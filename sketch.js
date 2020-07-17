const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var ground ;
var particles = [];
var plinkos = [];
var divisions = [];

var divisionHeight = 300 ;

function setup() {
  createCanvas(480,800);
  //createSprite(400, 200, 50, 50);

  engine = Engine.create();
  world = engine.world;
Engine.run(engine);

  ground = new Ground(800,790,20,330);
}

function draw() {
  background(255,255,255);  
  //drawSprites();

 for(var k=0 ; k <= width; k = k+80 ){
  divisions.push(new Divisions( k , height-divisionHeight/2 , 10 , divisionHeight))

 }

 for(var j=0 ; j<=width ; j = j+50 ){
   plinkos.push(new Plinko(k , 75))
 }

 for(var j=15 ; j<=width-10 ; j = j+50 ){
  plinkos.push(new Plinko(k , 175))
}


for(var j=30 ; j<=width ; j = j+50 ){
  plinkos.push(new Plinko(k , 75))
}


for(var j=45 ; j<=width-10 ; j = j+50 ){
  plinkos.push(new Plinko(k , 175))
}

if(frameCount%90 === 0){

  particles.push(new Particle(random(width/2-10 , width/2 +10),10 , 10));
}

  ground.display();

  for(var k=0 ; k<divisions ; k++){
    divisions[k].display();
  }

  for(var j=0 ; j<divisions ; j++){
    particles[j].display();
  }

  
  for(var p=0 ; p<divisions ; p++){
    plinkos[p].display();
  }


}