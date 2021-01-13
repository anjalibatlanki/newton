
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;
var roof;
var bobObject1, bobObject2, bobObject3, bobObject4, bobObject5;
var chain1;
var bobDiameter = 40;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
    roof = new Roof (400, 30, 600, 30);
    startBobPositionX=width/2;
    startBobPositionY=height/4+500;
    bobObject1=new Bob(startBobPositionX-bobDiameter*2,startBobPositionY,bobDiameter);
    bobObject2=new Bob(startBobPositionX-bobDiameter,startBobPositionY,bobDiameter);
    bobObject3=new Bob(startBobPositionX,startBobPositionY,bobDiameter);
    bobObject4=new Bob(startBobPositionX+bobDiameter,startBobPositionY,bobDiameter);
    bobObject5=new Bob(startBobPositionX+bobDiameter*2,startBobPositionY,bobDiameter);

  chain1=new Chain(bobObject1.body, roof.body, -2,-30);
  chain2=new Chain(bobObject2.body, roof.body, -bobDiameter*1, -15);
  chain3=new Chain(bobObject3.body, roof.body, 0, 0);
  chain4=new Chain(bobObject4.body, roof.body, bobDiameter*1, 15);
  chain5=new Chain(bobObject5.body, roof.body, bobDiameter*2, 30);
	Engine.run(engine);
   
}


function draw() {
  rectMode(CENTER);
  background(100);
  

  roof.display();
  
  bobObject1.display();
  bobObject2.display();
  bobObject3.display();
  bobObject4.display();
  bobObject5.display();

  chain1.display();
  chain2.display();
  chain3.display();
  chain4.display();
  chain5.display();

  drawSprites();
 
}



