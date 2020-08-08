
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ground,ball,Lrect,Rrect,Mrect;

function preload()
{
	
}

function setup() {
	createCanvas(2000, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.


	Engine.run(engine);

	ground = new Ground(1000,650,2000,20);
	paperObject = new Paper(200,400,25);
	
	 Lrect = new Box(1390,605,20,100);
	 Rrect = new Box(1610,605,20,100);
	 Mrect = new Box(1500,635,200,20);
	

	 }
function draw() {
  background(0);
  
  drawSprites();

  ground.display();
  paperObject.display();
  Lrect.display();
  Mrect.display();
  Rrect.display();
}

function keyPressed(){
	if(keyCode === UP_ARROW)
	{
	Matter.Body.applyForce(paperObject.body,paperObject.body.position,{x:160,y:-160});
	}
}


