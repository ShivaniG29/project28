
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var lauchingForce=100;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
   
	ground = new Ground(400,550,800,20)
    leftside = new Dustbin(535,490,20,100);
	rightside = new Dustbin(705,490,20,100);
	bottom = new Dustbin(620,530,150,20);
	paper = new Paper(150,150,25);
	launcher1 = new Launcher(paper.body,{x:200, y:100});
	
	Engine.run(engine);
  
}

function draw() {
  rectMode(CENTER);
  background(225);
  Engine.update(engine);
    strokeWeight(4);
  ground.display();
  //leftside.display();
  //rightside.display();
  bottom.display();
  paper.display();
  launcher1.display(); 

  
  drawSprites();
 
}

function keyPressed(){
	if(keyCode === UP_ARROW){
     Matter.Body.applyForce(paper.body,paper.position,{x:70,y:-70})
	}
}
function mouseDragged(){
    Matter.Body.setPosition(paper.body,{x:620,y:530})
}
function mouseReleased(){
   launcher1.fly()
}


